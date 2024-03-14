import { defineSlotRecipe } from '@pandacss/dev'

export const collapsible = defineSlotRecipe({
	className: 'collapsible',
	slots: ['root'],
	base: {},
})
