import { defineSlotRecipe } from '@pandacss/dev'

export const passwordInput = defineSlotRecipe({
	className: 'passwordInput',
	slots: ['root', 'label', 'control', 'input', 'visibilityTrigger'],
	base: {
		root: { display: 'flex', alignItems: 'center', gap: '2' },
		label: { display: 'none' },
		control: {
			pos: 'relative',
			display: 'flex',
			alignItems: 'center',
			borderColor: 'gray.200',
			rounded: 'sm',
			borderWidth: 1,
		},
		input: {
			flex: 1,
			appearance: 'none',
			bg: 'white',
			outline: 0,
			pos: 'relative',
			transitionDuration: 'normal',
			transitionProperty: 'box-shadow, border-color',
			transitionTimingFunction: 'default',
			w: 'full',
			h: 10,
			px: 4,
			textAlign: 'left',
		},
		visibilityTrigger: {
			p: 2,
			bg: 'gray.100',
		},
	},
})
