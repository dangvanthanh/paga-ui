import { defineSlotRecipe } from '@pandacss/dev'

export const pagination = defineSlotRecipe({
	className: 'pagination',
	slots: ['root', 'item', 'ellipsis', 'prevTrigger', 'nextTrigger'],
	base: {
		root: { display: 'flex', alignItems: 'center', gap: '2' },
		item: {
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: 'gray.300',
			rounded: 'sm',
			height: 9,
			minW: 9,
			textStyle: 'sm',
			paddingInline: 3.5,
			fontVariantNumeric: 'tabular-nums',
			_selected: {
				bg: 'gray.900',
				color: 'white',
				_hover: {
					bg: 'gray.800',
				},
			},
			_hover: {
				bg: 'gray.100',
			},
		},
		ellipsis: {
			display: 'inline-flex',
			alignItems: 'center',
			color: 'gray.600',
			fontWeight: '600',
			px: 2,
		},
		prevTrigger: {
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
			rounded: 'sm',
			height: 9,
			minW: 9,
			textStyle: 'sm',
			paddingInline: 1.5,
			// _disabled: {
			//   opacity: ".3",
			//   cursor: "default",
			//   pointerEvents: "none",
			// },
			_hover: {
				bg: 'gray.100',
			},
		},
		nextTrigger: {
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
			rounded: 'sm',
			height: 9,
			minW: 9,
			textStyle: 'sm',
			paddingInline: 1.5,
			// _disabled: {
			//   opacity: ".3",
			//   cursor: "default",
			//   pointerEvents: "none",
			// },
			_hover: {
				bg: 'gray.100',
			},
		},
	},
})
