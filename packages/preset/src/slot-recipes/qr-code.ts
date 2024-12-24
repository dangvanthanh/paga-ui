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
			w: 310,
			h: 310,
		},
		overlay: {
			w: 16,
			h: 16,
		},
	},
})
