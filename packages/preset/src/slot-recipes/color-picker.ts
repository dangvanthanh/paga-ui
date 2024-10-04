import { defineSlotRecipe } from '@pandacss/dev'

const thumb = {
	rounded: 'xl',
	h: 5,
	w: 5,
	outline: 'none',
	transform: 'translate(-50%,-50%)',
	shadow: '0 0 0 1px #d1d5db, 0 0 0 2px white inset',
}

export const colorPicker = defineSlotRecipe({
	className: 'colorPicker',
	slots: [
		'root',
		'trigger',
		'transparencyGrid',
		'swatch',
		'input',
		'control',
		'content',
		'area',
		'areaBackground',
		'areaThumb',
		'channelSlider',
		'channelSliderTrack',
		'channelSliderThumb',
		'swatchGroup',
		'eyeDropperTrigger',
	],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			zIndex: 1,
			pos: 'relative',
		},
		transparencyGrid: {
			rounded: 'sm',
		},
		swatch: {
			w: 'full',
			minW: 9,
			h: 9,
			rounded: 'sm',
		},
		input: {
			borderColor: 'gray.300',
			borderWidth: 1,
			rounded: 'sm',
			py: 1.5,
			px: 3,
			h: 9,
			w: 'full',
		},
		control: {
			display: 'flex',
			flexDirection: 'row',
			gap: 2,
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			bg: 'white',
			rounded: 'sm',
			shadow: 'sm',
			minW: 'xs',
			p: 3,
			gap: 3,
			maxW: 'md',
			_open: {
				animation: 'fadeIn 0.2s ease-in-out',
			},
			_closed: {
				animation: 'fadeOut 0.2s ease-in-out',
				display: 'none',
			},
		},
		area: {
			height: 36,
			rounded: 'sm',
			overflow: 'hidden',
		},
		areaBackground: {
			h: 'full',
		},
		areaThumb: {
			...thumb,
		},
		channelSlider: {
			rounded: 'sm',
		},
		channelSliderTrack: {
			rounded: 'sm',
			h: 3,
		},
		channelSliderThumb: {
			...thumb,
		},
		swatchGroup: {
			display: 'grid',
			gridTemplateColumns: 'repeat(7, 1fr)',
			gap: 4,
		},
		eyeDropperTrigger: {
			display: 'flex',
			borderWidth: 1,
			borderColor: 'gray.300',
			p: 1.5,
			rounded: 'sm',
			cursor: 'pointer',
		},
	},
})
