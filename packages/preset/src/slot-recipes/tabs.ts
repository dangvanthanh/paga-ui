import { defineSlotRecipe } from '@pandacss/dev'

export const tabs = defineSlotRecipe({
	className: 'tabs',
	slots: ['root', 'trigger', 'list', 'content', 'indicator'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
		},
		content: {
			textStyle: 'sm',
			color: 'gray.500',
			py: 3,
		},
		list: {
			display: 'flex',
			flexShrink: 0,
			flexDirection: 'row',
			overflow: 'auto',
			position: 'relative',
			borderBottomWidth: '1px',
			borderColor: 'gray.300',
		},
		trigger: {
			display: 'inline-flex',
			alignItems: 'center',
			color: 'gray.500',
			cursor: 'pointer',
			fontWeight: 500,
			px: 3,
			py: 1.5,
			textStyle: 'sm',
			_selected: {
				color: 'gray.900',
				borderBottomWidth: '2px',
				borderColor: 'gray.900',
			},
		},
		indicator: {
			'--transition-duration': '0.2s',
			'--transition-timing-function': 'ease-in-out',
		},
	},
})
