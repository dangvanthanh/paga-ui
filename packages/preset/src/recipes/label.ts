import { defineRecipe } from '@pandacss/dev'

export const label = defineRecipe({
	className: 'label',
	base: {
		color: 'gray.700',
		fontWeight: '500',
	},
	variants: {
		size: {
			xs: {
				textStyle: 'xs',
			},
			sm: {
				textStyle: 'sm',
			},
			md: {
				textStyle: 'md',
			},

			lg: {
				textStyle: 'lg',
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
})
