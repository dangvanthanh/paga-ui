import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
	className: 'input',
	base: {
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
		_disabled: {
			opacity: 0.4,
			cursor: 'not-allowed',
		},
		_focus: {
			borderColor: 'gray.800',
			shadow: 'sm',
		},
	},
	variants: {
		size: {
			xs: { px: '3', h: '8', minW: '8', textStyle: 'xs' },
			sm: { px: '3.5', h: '9', minW: '9', textStyle: 'sm' },
			md: { px: '4', h: '10', minW: '10', textStyle: 'md' },
			lg: { px: '6', h: '12', minW: '12', textStyle: 'lg' },
		},
	},
	defaultVariants: {
		size: 'md',
	},
})
