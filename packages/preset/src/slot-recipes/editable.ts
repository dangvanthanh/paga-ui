import { defineSlotRecipe } from '@pandacss/dev'

export const editable = defineSlotRecipe({
	className: 'editable',
	slots: ['root', 'area', 'input', 'preview'],
	base: {
		root: { display: 'flex', alignItems: 'center', w: 'full' },
		area: { w: 'full' },
		input: {
			w: 'full',
			appearance: 'none',
			bg: 'white',
			borderColor: 'gray.200',
			borderWidth: 1,
			rounded: 'sm',
			outline: 0,
			pos: 'relative',
			transitionDuration: 'normal',
			transitionProperty: 'box-shadow, border-color',
			transitionTimingFunction: 'default',
			px: 3.5,
			h: 9,
			textStyle: 'sm',
			_disabled: {
				opacity: 0.4,
				cursor: 'not-allowed',
			},
			_focus: {
				borderColor: 'gray.900',
				shadow: 'sm',
			},
		},
		preview: {
			display: 'block',
			px: 3,
			py: 1.5,
			textStyle: 'sm',
			borderWidth: 1,
			borderColor: 'transparent',
			minH: 9,
		},
	},
})
