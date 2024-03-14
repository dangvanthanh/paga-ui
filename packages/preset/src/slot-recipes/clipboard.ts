import { defineSlotRecipe } from '@pandacss/dev'

export const clipboard = defineSlotRecipe({
	className: 'clipboard',
	slots: ['root', 'label', 'control', 'input', 'trigger'],
	base: {},
})
