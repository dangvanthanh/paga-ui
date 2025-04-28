import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['src/**/*.ts'],
	format: ['esm', 'cjs'],
	clean: true,
	dts: true,
	minify: true,
})
