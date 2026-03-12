<script setup lang="ts">
import * as cascadeSelect from '@zag-js/cascade-select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, Teleport } from 'vue'
import CascadeSelectNode from './CascadeSelectNode.vue'

interface Node {
	label: string
	value: string
	children?: Node[]
}

const collection = cascadeSelect.collection<Node>({
	nodeToValue: (node) => node.value,
	nodeToString: (node) => node.label,
	nodeToChildren: (node) => node.children,
	rootNode: {
		label: 'ROOT',
		value: 'ROOT',
		children: [
			{
				label: 'North America',
				value: 'north-america',
				children: [
					{
						label: 'United States',
						value: 'us',
						children: [
							{ label: 'New York', value: 'ny' },
							{ label: 'California', value: 'ca' },
						],
					},
					{ label: 'Canada', value: 'canada' },
				],
			},
			{
				label: 'Africa',
				value: 'africa',
				children: [
					{ label: 'Nigeria', value: 'ng' },
					{ label: 'Kenya', value: 'ke' },
				],
			},
		],
	},
})

const service = useMachine(cascadeSelect.machine, {
	id: '1',
	collection,
})

const api = computed(() => cascadeSelect.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()">
		<label v-bind="api.getLabelProps()">Location</label>
		<div v-bind="api.getControlProps()">
			<button type="button" v-bind="api.getTriggerProps()">
				<span>{{ api.valueAsString || "Select location" }}</span>
				<span v-bind="api.getIndicatorProps()">▼</span>
			</button>
			<button type="button" v-bind="api.getClearTriggerProps()">✕</button>
		</div>
		<Teleport to="body">
			<div v-bind="api.getPositionerProps()">
				<div v-bind="api.getContentProps()">
					<CascadeSelectNode
						:node="collection.rootNode"
						:api="api"
						:collection="collection"
						:index-path="[]"
						:value="[]"
					/>
				</div>
			</div>
		</Teleport>
	</div>
</template>
