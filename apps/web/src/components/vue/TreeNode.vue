<script setup lang="ts">
import type { Api } from '@zag-js/tree-view'
import { FileIcon, FolderIcon, ChevronRightIcon } from 'lucide-vue-next'
import { computed } from 'vue'
import { css } from '@/styled-system/css'
import { treeView } from '@/styled-system/recipes'

interface Node {
	id: string
	name: string
	children?: Node[]
}

interface Props {
	node: Node
	indexPath: number[]
	api: Api
}

const styles = treeView()

const props = defineProps<Props>()

const nodeProps = computed(() => ({
	indexPath: props.indexPath,
	node: props.node,
}))

const nodeState = computed(() => props.api.getNodeState(nodeProps.value))
</script>

<template>
  <template v-if="nodeState.isBranch">
    <div v-bind="api.getBranchProps(nodeProps)">
      <div v-bind="api.getBranchControlProps(nodeProps)" :class="styles.branchControl">
        <FolderIcon :class="css({ w: 4, h: 4 })" />
        <span v-bind="api.getBranchTextProps(nodeProps)" :class="styles.branchText">{{ node.name }}</span>
        <span v-bind="api.getBranchIndicatorProps(nodeProps)" :class="styles.branchIndicator">
          <ChevronRightIcon :class="css({ w: 4, h: 4 })" />
        </span>
      </div>
      <div v-bind="api.getBranchContentProps(nodeProps)" :class="styles.branch">
        <div v-bind="api.getBranchIndentGuideProps(nodeProps)" />
        <TreeNode v-for="(childNode, index) in node.children" :key="childNode.id" :node="childNode"
          :index-path="[...indexPath, index]" :api="api" />
      </div>
    </div>
  </template>
  <template v-else>
    <div v-bind="api.getItemProps(nodeProps)" :class="styles.item">
      <FileIcon :class="css({ w: 4, h: 4 })" /> {{ node.name }}
    </div>
  </template>
</template>