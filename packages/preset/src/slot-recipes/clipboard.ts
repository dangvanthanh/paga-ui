import { defineSlotRecipe } from '@pandacss/dev'

export const clipboard = defineSlotRecipe({
	className: 'clipboard',
	slots: ['root', 'label', 'control', 'input', 'trigger'],
	base: {
		control: {
			display: 'flex',
			gap: 1.5,
		},
		input: {
			py: 1.5,
			px: 3,
			borderWidth: 1,
			rounded: 'sm',
			borderColor: 'gray.300',
			w: 'full',
			h: 9,
		},
		trigger: {
			p: 2,
			h: 9,
			borderWidth: 1,
			borderColor: 'gray.300',
			bg: 'gray.900',
			color: 'white',
			rounded: 'sm',
			'& > svg': {
				w: 4,
				h: 5,
			},
		},
	},
})
