import { defineSlotRecipe } from '@pandacss/dev'

export const combobox = defineSlotRecipe({
	className: 'combobox',
	slots: ['root', 'label', 'control', 'input', 'trigger', 'content', 'item'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: 1.5,
			w: 'full',
		},
		label: {
			textStyle: 'sm',
		},
		control: {
			pos: 'relative',
		},
		input: {
			pl: 3,
			pr: 6,
			py: 2,
			rounded: 'sm',
			w: 'full',
			textStyle: 'sm',
			borderWidth: 1,
			borderColor: 'gray.200',
		},
		trigger: {
			pos: 'absolute',
			top: 0,
			right: 1.5,
			bottom: 0,
		},
		content: {
			bg: 'white',
			rounded: 'sm',
			shadow: 'sm',
			display: 'flex',
			flexDirection: 'column',
			_open: {
				animation: 'fadeIn 0.2s ease-in-out',
			},
			_closed: {
				animation: 'fadeOut 0.2s ease-in-out',
				display: 'none',
			},
			_focusVisible: {
				outlineOffset: '2px',
				outline: '2px solid',
				outlineColor: 'gray.900',
			},
		},
		item: {
			w: 'full',
			display: 'flex',
			alignItems: 'center',
			px: 2,
			py: 1,
			cursor: 'pointer',
			textStyle: 'sm',
			transitionDuration: '150ms',
			transitionProperty: 'background-color, color',
			transitionTimingFunction: 'ease-in-out',
			_hover: {
				bg: 'gray.200',
			},
			_highlighted: {
				bg: 'gray.200',
			},
			_checked: {
				bg: 'gray.200',
				cursor: 'default',
				pointerEvents: 'none',
			},
			_disabled: {
				color: 'gray.300',
				cursor: 'default',
				pointerEvents: 'none',
				_hover: {
					bg: 'transparent',
				},
			},
		},
	},
})
