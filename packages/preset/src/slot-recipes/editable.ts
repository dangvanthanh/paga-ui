import { defineSlotRecipe } from '@pandacss/dev'

export const editable = defineSlotRecipe({
	className: 'editable',
	slots: ['root', 'area', 'input'],
	base: {
		root: { display: 'flex', alignItems: 'center', w: 'full' },
		area: { w: 'full' },
		input: {
			w: 'full',
			appearance: 'none',
			bg: 'white',
			borderColor: 'gray.300',
			rounded: 'sm',
			borderWidth: 1,
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
				borderColor: 'gray.800',
				shadow: 'sm',
			},
		},
	},
})
