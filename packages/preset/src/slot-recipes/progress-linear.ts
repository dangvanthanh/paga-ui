import { defineSlotRecipe } from '@pandacss/dev'

export const progressLinear = defineSlotRecipe({
	className: 'progressLinear',
	slots: ['root', 'range', 'track'],
	base: {
		root: { display: 'flex', alignItems: 'center', minW: 'md' },
		range: {
			bg: 'gray.800',
			h: 'full',
		},
		track: {
			bg: 'white',
			borderWidth: 1,
			overflow: 'hidden',
			height: 8,
			borderColor: 'gray.100',
			w: 'full',
		},
	},
})
