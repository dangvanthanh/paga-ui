import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { keyframes } from './keyframes'
import { recipes } from './recipes'
import { slotRecipes } from './slot-recipes'

const preset: Preset = definePreset({
	theme: {
		extend: {
			keyframes,
			recipes,
			slotRecipes
		},
	},
})

export default preset
