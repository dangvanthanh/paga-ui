import { defineSlotRecipe } from '@pandacss/dev'

export const presence = defineSlotRecipe({
	className: 'presence',
	slots: ['root'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
})
