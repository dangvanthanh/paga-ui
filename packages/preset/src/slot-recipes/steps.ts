import { defineSlotRecipe } from '@pandacss/dev'

export const steps = defineSlotRecipe({
	className: 'steps',
	slots: [
		'root',
		'list',
		'item',
		'separator',
		'trigger',
		'indicator',
		'content',
	],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: 4,
			w: 'full',
		},
		list: {
			display: 'flex',
			justifyContent: 'space-between',
			'&[data-orientation=horizontal]': {
				flexDirection: 'row',
				alignItems: 'center',
			},
		},
		item: {
			display: 'flex',
			pos: 'relative',
			alignItems: 'center',
			flex: '1 0',
			_last: {
				flex: 'initial',
				'& [data-part="separator"]': {
					display: 'none',
				},
			},
		},
		separator: {
			w: 'full',
			h: 1,
			bg: 'gray.400',
			mx: 3,
			flex: '1 1',
			rounded: 'full',
		},
		trigger: {
			display: 'flex',
			alignItems: 'center',
			gap: 3,
		},
		indicator: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			w: 6,
			h: 6,
			rounded: 'full',
			bg: 'gray.400',
			color: 'white',
			fontSize: 'sm',
			'&[data-current]': {
				borderWidth: 2,
				bg: 'gray.700',
				outline: '2px solid {colors.gray.700}',
			},
		},
		content: {
			bg: 'white',
			minH: 24,
			padding: 4,
			borderWidth: 1,
			borderColor: 'gray.200',
		},
	},
})
