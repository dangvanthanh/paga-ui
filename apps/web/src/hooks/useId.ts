import { type InjectionKey, type Ref, inject, provide } from 'vue'

let count = 0
type Direction = 'ltr' | 'rtl'

type ScrollBodyOption = {
	padding?: boolean | number
	margin?: boolean | number
}

interface ConfigProviderContextValue {
	dir?: Ref<Direction>
	scrollBody?: Ref<boolean | ScrollBodyOption>
	useId?: () => string
}

/**
 * @param providerComponentName - The name(s) of the component(s) providing the context.
 *
 * There are situations where context can come from multiple components. In such cases, you might need to give an array of component names to provide your context, instead of just a single string.
 *
 * @param contextName The description for injection key symbol.
 */
function createContext<ContextValue>(
	providerComponentName: string | string[],
	contextName?: string,
) {
	const symbolDescription =
		typeof providerComponentName === 'string' && !contextName
			? `${providerComponentName}Context`
			: contextName

	const injectionKey: InjectionKey<ContextValue | null> =
		Symbol(symbolDescription)

	/**
	 * @param fallback The context value to return if the injection fails.
	 *
	 * @throws When context injection failed and no fallback is specified.
	 * This happens when the component injecting the context is not a child of the root component providing the context.
	 */
	const injectContext = <
		T extends ContextValue | null | undefined = ContextValue,
	>(
		fallback?: T,
	): T extends null ? ContextValue | null : ContextValue => {
		const context = inject(injectionKey, fallback)
		if (context) return context

		if (context === null)
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			return context as any

		throw new Error(
			`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${
				Array.isArray(providerComponentName)
					? `one of the following components: ${providerComponentName.join(
							', ',
						)}`
					: `\`${providerComponentName}\``
			}`,
		)
	}

	const provideContext = (contextValue: ContextValue) => {
		provide(injectionKey, contextValue)
		return contextValue
	}

	return [injectContext, provideContext] as const
}

export const [injectConfigProviderContext, provideConfigProviderContext] =
	createContext<ConfigProviderContextValue>('ConfigProvider')

export function useId(
	deterministicId?: string | null | undefined,
	prefix = 'paga-ui',
) {
	if (deterministicId) return deterministicId

	const { useId } = injectConfigProviderContext({ useId: undefined })
	if (useId && typeof useId === 'function') return `${prefix}-${useId()}`

	return `${prefix}-${++count}`
}
