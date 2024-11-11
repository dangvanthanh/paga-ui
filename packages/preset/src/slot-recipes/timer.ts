import { defineSlotRecipe } from '@pandacss/dev'

export const timer = defineSlotRecipe({
	className: 'timer',
	slots: ['root', 'area', 'item', 'separator', 'control'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: 4,
		},
		area: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			gap: 2,
		},
		item: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
})
