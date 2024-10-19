import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	preflight: true,
	lightningcss: true,
	presets: ['@pandacss/dev/presets', '@paga/preset'],
	include: ['./src/**/*.{js,jsx,ts,tsx,vue,astro}'],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: 'styled-system',
})
