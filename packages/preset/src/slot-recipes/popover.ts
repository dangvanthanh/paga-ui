import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
	className: 'popover',
	slots: [
		'trigger',
		'positioner',
		'content',
		'title',
		'description',
		'arrow',
		'closeTrigger',
	],
	base: {
		trigger: {
			textStyle: 'sm',
		},
		positioner: {
			pos: 'relative',
		},
		content: {
			background: 'white',
			borderRadius: 'sm',
			boxShadow: 'sm',
			flexDirection: 'column',
			minW: 'xs',
			p: 3,
			pos: 'relative',
			zIndex: 1,
			_open: {
				animation: 'fadeIn 0.2s ease-out',
				display: 'flex',
			},
			closed: {
				animation: 'fadeOut 0.2s ease-out',
				visibility: 'hidden',
			},
		},
		title: {
			fontWeight: 500,
			textStyle: 'sm',
		},
		description: {
			color: 'gray.500',
			textStyle: 'sm',
		},
		arrow: {
			'--arrow-size': '12px',
			'--arrow-background': 'white',
		},
		closeTrigger: {
			pos: 'absolute',
			top: 0,
			right: 2,
			cursor: 'pointer',
		},
	},
})
