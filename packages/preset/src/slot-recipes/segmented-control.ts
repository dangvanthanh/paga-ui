import { defineSlotRecipe } from '@pandacss/dev'

export const segmentedControl = defineSlotRecipe({
	className: 'segmentedControl',
	slots: ['root', 'indicator', 'radio'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			borderBottomWidth: '1px',
			borderColor: 'gray.300',
			pb: 3,
		},
		indicator: {
			borderColor: 'gray.700',
			borderBottomWidth: '2px',
			transform: 'translateY(3px)',
		},
		radio: {
			color: 'gray.500',
			cursor: 'pointer',
			fontWeight: 500,
			pt: 1.5,
			pb: 3,
			px: 3,
			textStyle: 'sm',
			_checked: {
				color: 'gray.900',
			},
		},
	},
})
