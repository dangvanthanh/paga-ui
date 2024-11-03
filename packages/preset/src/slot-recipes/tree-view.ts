import { defineSlotRecipe } from '@pandacss/dev'

export const treeView = defineSlotRecipe({
	className: 'tree-view',
	slots: [
		'root',
		'tree',
		'item',
		'branch',
		'branchControl',
		'branchContent',
		'branchText',
		'branchIndicator',
	],
	base: {
		tree: {
			mx: -4,
		},
		item: {
			'--padding-inline': '16px',
			display: 'flex',
			alignItems: 'center',
			gap: 2,
			px: 'calc(var(--depth) * var(--padding-inline)) var(--padding-inline)',
			py: 1,
		},
		branchControl: {
			'--padding-inline': '16px',
			display: 'flex',
			alignItems: 'center',
			gap: 2,
			px: 'calc(var(--depth) * var(--padding-inline)) var(--padding-inline)',
			py: 1,
		},
		branchText: {
			flex: 1,
		},
		branchIndicator: {
			'&[data-state="open"]': {
				transform: 'rotate(90deg)',
			},
		},
	},
})
