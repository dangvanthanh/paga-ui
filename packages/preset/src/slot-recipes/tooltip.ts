import { defineSlotRecipe } from '@pandacss/dev'

export const tooltip = defineSlotRecipe({
	className: 'tooltip',
	slots: ['root', 'content', 'arrow', 'trigger'],
	base: {
		root: {
			pos: 'relative',
		},
		content: {
			background: 'gray.900',
			color: 'white',
			fontWeight: '500',
			px: 3,
			py: 1,
			textStyle: 'sm',
			boxShadow: 'sm',
			borderRadius: 'sm',
			_open: {
				animation: 'fadeIn 0.25s ease-out',
			},
			_closed: {
				animation: 'fadeOut 0.2s ease-out',
			},
		},
	},
})
