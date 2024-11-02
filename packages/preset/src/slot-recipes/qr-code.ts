import { defineSlotRecipe } from '@pandacss/dev'

export const qrCode = defineSlotRecipe({
	className: 'qrCode',
	slots: ['root', 'frame', 'pattern', 'overlay'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			pos: 'relative',
		},
		frame: {
			w: 48,
			h: 48,
		},
		overlay: {
			w: 8,
			h: 8,
		},
	},
})
