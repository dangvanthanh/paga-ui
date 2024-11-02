<script setup lang="ts">
import { editable } from '@/styled-system/recipes'
import * as zagEditable from '@zag-js/editable'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = editable()
const [state, send] = useMachine(
	zagEditable.machine({ id: useId(), value: 'Editable...' }),
)
const api = computed(() =>
	zagEditable.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getAreaProps()" :class="styles.area">
      <input v-bind="api.getInputProps()" :class="styles.input" />
      <span v-bind="api.getPreviewProps()" />
    </div>
  </div>
</template>