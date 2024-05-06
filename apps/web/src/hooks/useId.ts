import { onBeforeUnmount, onMounted } from "vue"

const cacheId: { [key in string]: string[] } = {}

export function useId(type: string) {
	const id = `${new Date().getTime()}`

	onMounted(() => {
		if (!cacheId[type]) {
			cacheId[type] = [id]
		} else {
			cacheId[type].push(id)
		}
	})

	onBeforeUnmount(() => {
		cacheId[type] = cacheId[type].filter((value) => value !== id)
	})

	return id
}
