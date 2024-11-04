<script setup lang="ts">
import { switches } from '@/styled-system/recipes'
import * as zagSwitch from '@zag-js/switch'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const props = defineProps({
	label: String,
})

const styles = switches({ size: 'sm' })

const [state, send] = useMachine(zagSwitch.machine({ id: useId() }))

const api = computed(() => zagSwitch.connect(state.value, send, normalizeProps))
</script>

<template>
  <label v-bind="api.getRootProps()" :class="styles.root">
    <input v-bind="api.getHiddenInputProps()" />
    <span v-bind="api.getControlProps()" :class="styles.control">
      <span v-bind="api.getThumbProps()" :class="styles.thumb"></span>
    </span>
    <span v-if="props.label" v-bind="api.getLabelProps()" :class="styles.label">
      <span v-if="api.checked">{{ props.label }}</span>
      <span v-else>{{ props.label }}</span>
    </span>
  </label>
</template>