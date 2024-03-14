import { defineSlotRecipe } from '@pandacss/dev'

export const switchRecipe = defineSlotRecipe({
	className: 'switch',
	slots: ['root', 'control', 'thumb', 'label'],
	base: {
		root: { display: 'flex', alignItems: 'center' },
		control: {
			bg: 'gray.200',
			display: 'flex',
			alignItems: 'center',
			borderWidth: '1px',
			borderRadius: 'sm',
			padding: '0.5',
			position: 'relative',
			borderColor: 'gray.100',
			_checked: {
				bg: 'gray.800',
			},
			_disabled: {
				bg: 'gray.300',
				cursor: 'not-allowed',
			},
		},
		thumb: {
			bg: 'white',
			position: 'relative',
			borderRadius: 'sm',
			transition: 'transform .14s cubic-bezier(.45,.05,.55,.95)',
			_checked: {
				transform: 'translateX(105%)',
			},
		},
		label: { marginStart: '2' },
	},
	variants: {
		size: {
			sm: {
				control: { w: '12' },
				thumb: { width: '5', height: '5' },
				label: { fontSize: 'sm' },
			},
			md: {
				control: { w: '16' },
				thumb: { width: '7', height: '7' },
				label: { fontSize: 'md' },
			},
		},
	},
	defaultVariants: {
		size: 'sm',
	},
})
