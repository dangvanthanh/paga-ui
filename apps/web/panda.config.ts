import { defineConfig } from '@pandacss/dev'
import pagaPreset from '../../packages/preset/src/index'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', pagaPreset],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue,astro}', './pages/**/*.{js,jsx,ts,tsx,vue,astro}'],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
})