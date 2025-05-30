import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
	className: 'button',
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		userSelect: 'none',
		verticalAlign: 'top',
		cursor: 'pointer',
		rounded: 'sm',
		borderWidth: 1,
		_focusVisible: {
			outlineOffset: '2px',
			outline: '2px solid',
			outlineColor: 'gray.900',
		},
		_disabled: {
			cursor: 'not-allowed',
			pointerEvents: 'none',
			opacity: 0.75,
		},
	},
	variants: {
		variant: {
			primary: {
				borderColor: 'gray.100',
				bg: 'gray.800',
				color: 'white',
				_hover: {
					bg: 'gray.900',
				},
			},
			ghost: {
				borderColor: 'gray.200',
				bg: 'gray.100',
				_hover: {
					bg: 'gray.50',
				},
			},
		},
		size: {
			xs: {
				h: '8',
				minW: '8',
				textStyle: 'xs',
				px: '3',
				gap: '2',
			},
			sm: {
				h: '9',
				minW: '9',
				textStyle: 'sm',
				px: '3.5',
				gap: '2',
			},
			md: {
				h: '10',
				minW: '10',
				textStyle: 'sm',
				px: '4',
				gap: '2',
			},
			lg: {
				h: '12',
				minW: '12',
				textStyle: 'md',
				px: '6',
				gap: '2',
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'sm',
	},
})
