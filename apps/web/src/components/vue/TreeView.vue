<script setup lang="ts">
import * as zagTree from '@zag-js/tree-view'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { treeView } from '@/styled-system/recipes'
import { useId, computed } from 'vue'
import TreeNode from './TreeNode.vue'

interface Node {
	id: string
	name: string
	children?: Node[]
}

const styles = treeView()

const collection = zagTree.collection<Node>({
	nodeToValue: (node) => node.id,
	nodeToString: (node) => node.name,
	rootNode: {
		id: 'ROOT',
		name: '',
		children: [
			{
				id: 'node_modules',
				name: 'node_modules',
				children: [
					{ id: 'node_modules/zag-js', name: 'zag-js' },
					{ id: 'node_modules/pandacss', name: 'panda' },
					{
						id: 'node_modules/@types',
						name: '@types',
						children: [
							{ id: 'node_modules/@types/react', name: 'react' },
							{ id: 'node_modules/@types/react-dom', name: 'react-dom' },
						],
					},
				],
			},
			{
				id: 'src',
				name: 'src',
				children: [
					{ id: 'src/app.tsx', name: 'app.tsx' },
					{ id: 'src/index.ts', name: 'index.ts' },
				],
			},
			{ id: 'panda.config', name: 'panda.config.ts' },
			{ id: 'package.json', name: 'package.json' },
			{ id: 'renovate.json', name: 'renovate.json' },
			{ id: 'readme.md', name: 'README.md' },
		],
	},
})

const service = useMachine(zagTree.machine, { id: useId(), collection })
const api = computed(() => zagTree.connect(service, normalizeProps))
</script>

<template>
	<main class="tree-view">
		<div v-bind="api.getRootProps()">
			<h3 v-bind="api.getLabelProps()">My Documents</h3>
			<div v-bind="api.getTreeProps()" :class="styles.tree">
				<TreeNode
					v-for="(node, index) in api.collection.rootNode.children"
					:key="node.id"
					:node="node"
					:index-path="[index]"
					:api="api"
				/>
			</div>
		</div>
	</main>
</template>
