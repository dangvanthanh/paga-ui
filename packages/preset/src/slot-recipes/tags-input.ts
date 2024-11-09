import { defineSlotRecipe } from '@pandacss/dev'

export const tagsInput = defineSlotRecipe({
	className: 'tagsInput',
	slots: ['root', 'label', 'control', 'tag', 'input'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			w: 'full',
		},
		label: {
			display: 'none',
		},
		control: {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			borderWidth: 1,
			rounded: 'sm',
			borderColor: 'gray.200',
			outline: 'none',
			transitionDuration: 'normal',
			transitionProperty: 'border-color, box-shadow',
			transitionTimingFunction: 'default',
			p: 1.5,
			gap: 1,
			_focusWithin: {
				borderColor: 'gray.900',
				shadow: 'sm',
			},
		},
		input: {
			outline: 'none',
			bg: 'transparent',
		},
		tag: {
			borderColor: 'gray.200',
			borderWidth: 1,
			rounded: 'sm',
			color: 'gray.900',
			bg: 'gray.100',
			fontWeight: '500',
			display: 'inline-flex',
			alignItems: 'center',
			gap: 1,
			px: 1.5,
			_highlighted: {
				borderColor: 'gray.400',
			},
		},
	},
})
