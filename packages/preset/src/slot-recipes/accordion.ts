import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
	className: 'accordion',
	slots: ['root', 'item', 'trigger', 'content'],
	base: {
		root: {
			divideY: '1px',
			divideColor: 'gray.300',
			w: 'full',
			display: 'flex',
			flexDirection: 'column',
		},
		item: {
			py: 2,
		},
		trigger: {
			display: 'flex',
			alignItems: 'center',
			cursor: 'pointer',
			textStyle: 'sm',
			w: 'full',
			color: 'gray.700',
			fontWeight: 500,
		},
		content: {
			display: 'grid',
			gridTemplateRows: '0fr',
			transitionProperty: 'grid-template-rows, padding-bottom',
			transitionDuration: 'normal',
			transitionTimingFunction: 'default',
			textStyle: 'sm',
			color: 'gray.500',
			py: 1,
			h: 'auto',
			_open: {
				gridTemplateRows: '1fr',
			},
			_closed: {
				h: 0,
				overflow: 'hidden',
			},
			'& > div': {
				overflow: 'hidden',
			},
		},
	},
})
