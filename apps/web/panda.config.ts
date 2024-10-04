import pagaPreset from '@paga/preset'
import { defineConfig } from '@pandacss/dev'
import pandaPresets from '@pandacss/dev/presets'

export default defineConfig({
	preflight: true,
	lightningcss: true,
	presets: [pandaPresets, pagaPreset],
	include: ['./src/**/*.{js,jsx,ts,tsx,vue,astro}'],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: 'styled-system',
})
