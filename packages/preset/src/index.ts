import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { keyframes } from './keyframes'
import { recipes } from './recipes'
import { slotRecipes } from './slot-recipes'

const createPreset = (): Preset => {
	return definePreset({
		name: '@paga/preset',
		theme: {
			extend: {
				keyframes,
				recipes,
				slotRecipes,
			},
		},
	})
}

const pagaPreset = createPreset()

export { createPreset, pagaPreset as default }
