import { defineSlotRecipe } from '@pandacss/dev'

export const toggleGroup = defineSlotRecipe({
	className: 'toggleGroup',
	slots: ['root', 'item'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			gap: 1,
		},
		item: {
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: 'gray.200',
			rounded: 'sm',
			height: 9,
			minW: 9,
			textStyle: 'sm',
			paddingInline: 3.5,
			'&[data-state="on"]': {
				bg: 'gray.900',
				color: 'white',
				_hover: {
					bg: 'gray.800',
				},
			},
			_hover: {
				bg: 'gray.100',
			},
		},
	},
})
