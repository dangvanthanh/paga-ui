import { type Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
	entry: ['src/**/*.ts'],
	format: ['esm', 'cjs'],
	clean: true,
	dts: true,
	minify: true,
	...options,
}))