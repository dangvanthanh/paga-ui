<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { pinInput } from '@/styled-system/recipes'
import * as zagPinInput from '@zag-js/pin-input'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const styles = pinInput()
const [state, send] = useMachine(zagPinInput.machine({ id: useId('pinInput') }))
const api = computed(() =>
	zagPinInput.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div ref="ref" v-bind="api.getRootProps()" :class="styles.root">
    <input v-bind="api.getInputProps({ index: 0 })" :class="styles.input" />
    <input v-bind="api.getInputProps({ index: 1 })" :class="styles.input" />
    <input v-bind="api.getInputProps({ index: 2 })" :class="styles.input" />
  </div>
</template>