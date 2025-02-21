import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
	className: 'select',
	slots: [
		'root',
		'trigger',
		'content',
		'item',
		'itemLabel',
		'itemIndicator',
		'label',
	],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: 1.5,
			minW: 'xs',
		},
		trigger: {
			bg: 'white',
			textStyle: 'sm',
			appearance: 'none',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: 'gray.200',
			rounded: 'sm',
			cursor: 'pointer',
			display: 'inline-flex',
			justifyContent: 'space-between',
			outline: 0,
			pos: 'relative',
			transitionDuration: 'normal',
			transitionProperty: 'background, box-shadow, border-color',
			transitionTimingFunction: 'default',
			width: 'full',
			px: 3,
			py: 1.5,
			_placeholderShown: {
				color: 'gray.300',
			},
		},
		content: {
			bg: 'white',
			rounded: 'sm',
			shadow: 'sm',
			display: 'flex',
			flexDirection: 'column',
			minW: 'xs',
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
			justifyContent: 'space-between',
			gap: 1,
			px: 2,
			py: 1.5,
			cursor: 'pointer',
			textStyle: 'sm',
			transitionDuration: '150ms',
			transitionProperty: 'background-color, color',
			transitionTimingFunction: 'ease-in-out',
			_hover: {
				bg: 'gray.50',
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
		itemLabel: {
			textStyle: 'sm',
		},
		itemIndicator: {
			color: 'gray.500',
		},
		label: {
			color: 'gray.700',
			fontWeight: 500,
		},
	},
})
