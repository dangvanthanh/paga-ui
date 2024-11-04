import { defineSlotRecipe } from '@pandacss/dev'

export const tour = defineSlotRecipe({
	className: 'tour',
	slots: [
		'backdrop',
		'positioner',
		'content',
		'progressText',
		'title',
		'description',
		'arrow',
		'actions',
		'actionTrigger',
		'closeTrigger',
	],
	base: {
		backdrop: {
			pos: 'absolute',
			inset: 0,
			bg: 'rgba(0, 0, 0, .5)',
		},
		positioner: {
			pos: 'fixed',
			inset: 0,
			m: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			w: 'full',
		},
		content: {
			bg: 'white',
			pos: 'relative',
			minW: 'md',
			p: 4,
		},
		progressText: {
			mb: 4,
			opacity: 0.75,
		},
		title: {
			fontWeight: 600,
		},
		description: {
			my: 4,
		},
		actions: {
			display: 'flex',
			gap: 2,
		},
		actionTrigger: {
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
			py: 2,
			px: 4,
			fontSize: 'sm',
			borderWidth: 1,
			borderColor: 'gray.100',
			bg: 'gray.800',
			color: 'white',
			_hover: {
				bg: 'gray.900',
			},
		},
		closeTrigger: {
			display: 'inline-flex',
			w: 6,
			h: 6,
			pos: 'absolute',
			top: 3,
			right: 3,
		},
	},
})
