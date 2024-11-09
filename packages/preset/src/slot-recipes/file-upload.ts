import { defineSlotRecipe } from '@pandacss/dev'

export const fileUpload = defineSlotRecipe({
	className: 'fileUpload',
	slots: [
		'root',
		'dropzone',
		'trigger',
		'label',
		'item',
		'itemName',
		'itemPreview',
	],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			w: 'full',
		},
		dropzone: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: 1,
			borderStyle: 'dashed',
			borderColor: 'gray.200',
			minH: 24,
			p: 3,
			rounded: 'sm',
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
			mt: 2,
			py: 2,
		},
		itemName: {
			display: 'flex',
			flexDirection: 'column',
			gap: 1.5,
			textStyle: 'sm',
			flex: '1 1 0%',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
		itemPreview: {
			w: 10,
			h: 10,
			objectFit: 'cover',
		},
	},
})
