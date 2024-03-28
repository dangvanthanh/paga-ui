import { defineSlotRecipe } from '@pandacss/dev'

export const carousel = defineSlotRecipe({
	className: 'carousel',
	slots: [
		'root',
		'viewport',
		'item',
		'prevTrigger',
		'nextTrigger',
		'indicatorGroup',
		'indicator',
	],
	base: {
		root: { pos: 'relative' },
		viewport: {
			overflowX: 'hidden',
			pos: 'relative',
		},
		prevTrigger: {
			pos: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			left: 0,
			zIndex: 1,
			bg: 'white',
			p: 2,
			cursor: 'pointer',
			_disabled: {
				opacity: 0.5,
				cursor: 'default',
				pointerEvents: 'none',
			},
		},
		nextTrigger: {
			pos: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			right: 0,
			zIndex: 1,
			bg: 'white',
			p: 2,
			cursor: 'pointer',
			_disabled: {
				opacity: 0.5,
				cursor: 'default',
				pointerEvents: 'none',
			},
		},
	},
})
