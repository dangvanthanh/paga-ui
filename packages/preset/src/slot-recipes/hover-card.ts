import { defineSlotRecipe } from '@pandacss/dev'

export const hoverCard = defineSlotRecipe({
	className: 'hoverCard',
	slots: ['trigger', 'content', 'arrow'],
	base: {
		trigger: {
			textStyle: 'sm',
		},
		content: {
			bg: 'white',
			rounded: 'sm',
			shadow: 'sm',
			maxW: 'lg',
			minW: 'xs',
			p: 3,
			pos: 'relative',
			textStyle: 'sm',
			_open: {
				animation: 'fadeIn 0.25s ease-out',
			},
			_closed: {
				animation: 'fadeOut 0.2s ease-out',
			},
		},
		arrow: {
			'--arrow-size': '12px',
			'--arrow-background': 'white',
		},
	},
})
