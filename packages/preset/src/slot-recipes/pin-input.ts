import { defineSlotRecipe } from '@pandacss/dev'

export const pinInput = defineSlotRecipe({
	className: 'pinInput',
	slots: ['root', 'label', 'input'],
	base: {
		root: { display: 'flex', alignItems: 'center', gap: '2' },
		label: { display: 'none' },
		input: {
			appearance: 'none',
			bg: 'white',
			borderColor: 'gray.200',
			rounded: 'sm',
			borderWidth: 1,
			outline: 0,
			pos: 'relative',
			transitionDuration: 'normal',
			transitionProperty: 'box-shadow, border-color',
			transitionTimingFunction: 'default',
			w: 10,
			h: 10,
			textAlign: 'center',
		},
	},
})
