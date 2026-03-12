<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['node', 'indexPath', 'value', 'api', 'collection'])

const nodeProps = computed(() => ({
	indexPath: props.indexPath,
	value: props.value,
	item: props.node,
}))
const nodeState = computed(() => props.api.getItemState(nodeProps.value))
const children = computed(() => props.collection.getNodeChildren(props.node))
</script>

<template>
	<ul v-bind="api.getListProps(nodeProps)">
		<li
			v-for="(item, index) in children"
			:key="collection.getNodeValue(item)"
			v-bind="api.getItemProps({ indexPath: [...indexPath, index], value: [...value, collection.getNodeValue(item)], item })"
		>
			<span
				v-bind="api.getItemTextProps({ indexPath: [...indexPath, index], value: [...value, collection.getNodeValue(item)], item })"
			>
				{{ item.label }}
			</span>
			<span>›</span>
			<span
				v-bind="api.getItemIndicatorProps({ indexPath: [...indexPath, index], value: [...value, collection.getNodeValue(item)], item })"
				>✓</span
			>
		</li>
	</ul>
	<CascadeSelectNode
		v-if="nodeState.highlightedChild && collection.isBranchNode(nodeState.highlightedChild)"
		:node="nodeState.highlightedChild"
		:api="api"
		:collection="collection"
		:index-path="[...indexPath, nodeState.highlightedIndex]"
		:value="[...value, collection.getNodeValue(nodeState.highlightedChild)]"
	/>
</template>
