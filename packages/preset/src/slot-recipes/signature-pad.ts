import { defineSlotRecipe } from '@pandacss/dev'

export const signaturePad = defineSlotRecipe({
	className: 'signaturePad',
	slots: ['root', 'control', 'guide', 'clearTrigger'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			w: 'full',
		},
		control: {
			pos: 'relative',
			w: 'full',
			h: 160,
			bg: 'gray.200',
			rounded: 'xs',
		},
		guide: {
			pos: 'absolute',
			bottom: '10%',
			left: 8,
			right: 8,
			borderBottom: '1px dashed #222',
		},
		clearTrigger: {
			pos: 'absolute',
			top: 2,
			right: 2,
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
})
