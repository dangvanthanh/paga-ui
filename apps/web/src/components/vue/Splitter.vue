<script setup lang="ts">
import { spliter } from '@/styled-system/recipes'
import * as zagSplitter from '@zag-js/splitter'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = spliter()

const service = useMachine(zagSplitter.machine, {
	id: useId(),
	defaultSize: [50, 50],
	panels: [
		{ id: 'a', minSize: 30 },
		{ id: 'b', minSize: 30 },
	],
})
const api = computed(() => zagSplitter.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getPanelProps({ id: 'a' })" :class="styles.panel">
			<p>A</p>
		</div>
		<div v-bind="api.getResizeTriggerProps({ id: 'a:b' })" :class="styles.resizeTrigger" />
		<div v-bind="api.getPanelProps({ id: 'b' })" :class="styles.panel">
			<p>B</p>
		</div>
	</div>
</template>