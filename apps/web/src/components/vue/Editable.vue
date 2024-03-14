<script setup>
import * as zagEditable from '@zag-js/editable'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { editable } from '@/styled-system/recipes'

const styles = editable()

const [state, send] = useMachine(
	zagEditable.machine({ id: '1', value: 'Editable...' }),
)
const api = computed(() =>
	zagEditable.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <div v-bind="api.areaProps" :class="styles.area">
      <input v-bind="api.inputProps" :class="styles.input" />
      <span v-bind="api.previewProps" />
    </div>
  </div>
</template>