import { defineSlotRecipe } from '@pandacss/dev'

const trigger = {
	display: 'flex',
	alignItems: 'center',
	color: 'gray.600',
	justifyContent: 'center',
	w: 5,
	height: 5,
	cursor: 'pointer',
}

export const numberInput = defineSlotRecipe({
	className: 'numberInput',
	slots: [
		'root',
		'label',
		'control',
		'input',
		'incrementTrigger',
		'decrementTrigger',
	],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: 1.5,
		},
		label: {
			fontWeight: 700,
		},
		control: {
			textStyle: 'sm',
			h: 10,
			ps: 3,
			borderWidth: 1,
			borderColor: 'gray.200',
			rounded: 'sm',
			display: 'flex',
		},
		input: {
			width: 'full',
			textStyle: 'sm',
			gridRow: '2',
			bg: 'transparent',
			outline: 'none',
			height: 10,
			borderRightWidth: 1,
			borderRightColor: 'gray.200',
		},
		incrementTrigger: {
			...trigger,
		},
		decrementTrigger: {
			...trigger,
			borderTopWidth: '1px',
			borderColor: 'gray.200',
		},
	},
})
