import { defineSlotRecipe } from '@pandacss/dev'

export const progressCircular = defineSlotRecipe({
	className: 'progressCircular',
	slots: ['root', 'circle', 'circleRange', 'circleTrack'],
	base: {
		root: { display: 'flex', alignItems: 'center' },
		circle: {
			'--size': '128px',
			'--thickness': '12px',
		},
		circleRange: {
			stroke: 'gray.800',
		},
		circleTrack: {
			stroke: 'gray.100',
		},
	},
})
