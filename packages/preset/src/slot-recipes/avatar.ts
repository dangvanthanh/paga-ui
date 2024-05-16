import { defineSlotRecipe } from '@pandacss/dev'

export const avatar = defineSlotRecipe({
	className: 'avatar',
	slots: ['root', 'image', 'fallback'],
	base: {
		root: {
			display: 'flex',
			verticalAlign: 'middle',
			overflow: 'hidden',
			borderRadius: 'sm',
		},
		image: {
			width: 'full',
			height: 'full',
			borderRadius: 'inherit',
			objectFit: 'cover',
			_hidden: {
				display: 'none',
			},
		},
		fallback: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'gray.800',
			boxShadow: 'md',
			color: 'white',
			fontSize: '1rem',
			lineHeight: '1',
			fontWeight: '500',
			overflow: 'hidden',
		},
	},
	variants: {
		size: {
			xs: {
				root: { w: 8, h: 8 },
				fallback: { w: 8, h: 8, fontSize: 'xs' },
			},
			sm: {
				root: { w: 9, h: 9 },
				fallback: { w: 9, h: 9, fontSize: 'sm' },
			},
			md: {
				root: { w: 10, h: 10 },
				fallback: { w: 10, h: 10, fontSize: 'md' },
			},
			lg: {
				root: { w: 12, h: 12 },
				fallback: { w: 12, h: 12, fontSize: 'lg' },
			},
		},
	},
	defaultVariants: {
		size: 'sm',
	},
})
