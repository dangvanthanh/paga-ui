import { defineSlotRecipe } from '@pandacss/dev'

export const checkbox = defineSlotRecipe({
	className: 'checkbox',
	slots: ['root', 'control', 'label'],
	base: {
		root: { display: 'flex', alignItems: 'center', gap: 2 },
		control: {
			bg: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: 1,
			borderColor: 'gray.300',
			cursor: 'pointer',
			transitionDuration: 'normal',
			transitionProperty: 'border-color, background',
			transitionTimingFunction: 'default',
			w: 5,
			h: 5,
			rounded: 'sm',
			_hover: {
				bg: 'gray.50',
			},
			_checked: {
				bg: 'grey.200',
				borderColor: 'gray.300',
				_hover: {
					bg: 'gray.50',
				},
			},
		},
		label: { color: 'gray.700', fontWeight: 500, textStyle: 'sm' },
	},
})
