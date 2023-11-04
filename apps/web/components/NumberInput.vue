<script setup>
import * as zagNumberInput from '@zag-js/number-input';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { numberInput } from '~/styled-system/recipes'

const numberInputClasses = numberInput()

const [state, send] = useMachine(zagNumberInput.machine({ id: '1', value: '14' }));
const api = computed(() =>
  zagNumberInput.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div v-bind="api.rootProps" :class="numberInputClasses.root">
    <div :class="numberInputClasses.control">
      <input v-bind="api.inputProps" :class="numberInputClasses.input" />
      <button v-bind="api.incrementTriggerProps" :class="numberInputClasses.incrementTrigger">+</button>
      <button v-bind="api.decrementTriggerProps" :class="numberInputClasses.decrementTrigger">-</button>
    </div>
  </div>
</template>