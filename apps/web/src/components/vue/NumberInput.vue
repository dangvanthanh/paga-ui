<script setup>
import * as zagNumberInput from '@zag-js/number-input'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { numberInput } from '@/styled-system/recipes'

const styles = numberInput()

const [state, send] = useMachine(
	zagNumberInput.machine({ id: '1', value: '14' }),
)
const api = computed(() =>
	zagNumberInput.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <div :class="styles.control">
      <input v-bind="api.inputProps" :class="styles.input" />
      <button v-bind="api.incrementTriggerProps" :class="styles.incrementTrigger">
        +
      </button>
      <button v-bind="api.decrementTriggerProps" :class="styles.decrementTrigger">
        -
      </button>
    </div>
  </div>
</template>