import { defineSlotRecipe } from '@pandacss/dev'

export const spliter = defineSlotRecipe({
	className: 'splitter',
	slots: ['root', 'panel', 'resizeTrigger'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		panel: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			bg: 'gray.50',
			borderWidth: '1px',
			borderColor: 'gray.300',
			h: 'full',
			minH: 32,
		},
		resizeTrigger: {
			bg: 'gray.300',
			display: 'flex',
			borderRadius: 'md',
			margin: 2,
			w: 2,
			h: 24,
		},
	},
})
