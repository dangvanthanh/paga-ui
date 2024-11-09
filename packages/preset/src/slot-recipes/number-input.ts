import { defineSlotRecipe } from '@pandacss/dev'

const trigger = {
	display: 'inline-flex',
	alignItems: 'center',
	color: 'gray.600',
	justifyContent: 'center',
	height: 4,
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
			h: 9,
			ps: 3,
			borderWidth: 1,
			borderColor: 'gray.200',
			rounded: 'sm',
			display: 'grid',
			divideX: '1px',
			divideColor: 'gray.300',
			gridTemplateColumns: '1fr 32px',
			gridTemplateRows: '1fr 1fr',
			overflow: 'hidden',
		},
		input: {
			width: 'full',
			textStyle: 'sm',
			gridRow: '2',
			bg: 'transparent',
			outline: 'none',
			height: 9,
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
