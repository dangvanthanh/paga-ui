import { defineSlotRecipe } from '@pandacss/dev'

export const slider = defineSlotRecipe({
	className: 'slider',
	slots: ['root', 'label', 'control', 'track', 'range', 'thumb', 'output'],
	base: {
		root: { width: 'full' },
		label: { color: 'gray.900', fontWeight: 'semibold' },
		control: { position: 'relative', display: 'flex', alignItems: 'center' },
		track: { bg: 'gray.200', borderRadius: 'xl', flex: '1' },
		range: { bg: 'gray.900', borderRadius: 'xl' },
		thumb: {
			bg: 'gray.900',
			borderColor: 'gray.200',
			borderRadius: 'full',
			borderWidth: '2px',
			boxShadow: 'sm',
			outline: 'none',
		},
	},
	variants: {
		size: {
			sm: {
				control: { py: 2 },
				track: { h: 2 },
				range: { h: 2 },
				thumb: { w: 6, h: 6 },
			},
		},
	},
	defaultVariants: {
		size: 'sm',
	},
})
