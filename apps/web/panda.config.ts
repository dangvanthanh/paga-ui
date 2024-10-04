import { defineConfig } from '@pandacss/dev'
import pagaPreset from '../../packages/preset/dist/index'

export default defineConfig({
	preflight: true,
	lightningcss: true,
	presets: ['@pandacss/dev/presets', pagaPreset],
	include: ['./src/**/*.{js,jsx,ts,tsx,vue,astro}'],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: 'styled-system',
})
