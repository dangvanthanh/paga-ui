import { defineSlotRecipe } from '@pandacss/dev'

export const fileUpload = defineSlotRecipe({
	className: 'fileUpload',
	slots: ['root', 'dropzone', 'trigger', 'label', 'item', 'itemName'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
		},
		dropzone: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: '1px',
			borderStyle: 'dashed',
			borderColor: 'gray.300',
			minH: 12,
			p: 3,
			borderRadius: 'sm',
		},
		trigger: {
			textStyle: 'sm',
		},
		label: {
			textStyle: 'sm',
		},
		item: {
			display: 'flex',
			alignItems: 'center',
			gap: 2,
			w: 'full',
			maxW: 64,
			mt: 2,
		},
		itemName: {
			textStyle: 'sm',
			flex: '1 1 0%',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
	},
})
