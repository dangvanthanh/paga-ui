<script setup lang="ts">
import { spliter } from '@/styled-system/recipes'
import * as zagSplitter from '@zag-js/splitter'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = spliter()

const [state, send] = useMachine(
	zagSplitter.machine({
		id: useId(),
		size: [
			{ id: 'a', size: 50 },
			{ id: 'b', size: 50 },
		],
	}),
)
const api = computed(() =>
	zagSplitter.connect(state.value, send, normalizeProps),
)
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