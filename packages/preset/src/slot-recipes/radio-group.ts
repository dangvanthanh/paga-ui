import { defineSlotRecipe } from '@pandacss/dev'

export const radioGroup = defineSlotRecipe({
	className: 'radioGroup',
	slots: ['root', 'label', 'item', 'itemControl', 'itemText'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
		},
		label: {
			display: 'flex',
			alignItems: 'center',
			gap: 2,
		},
		item: {
			display: 'flex',
			alignItems: 'center',
			cursor: 'pointer',
		},
		itemControl: {
			bg: 'white',
			rounded: '100%',
			borderColor: 'gray.300',
			borderWidth: 1,
			shadow: 'sm',
			w: 4,
			h: 4,
			_checked: {
				bg: 'gray.900',
			},
		},
		itemText: {
			textStyle: 'sm',
		},
	},
})
