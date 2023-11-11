<script setup lang="ts">
import * as zagPinInput from '@zag-js/pin-input';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { pinInput } from '~/styled-system/recipes';

const pinInputClasses = pinInput();

const [state, send] = useMachine(zagPinInput.machine({ id: '1' }));
const api = computed(() =>
  zagPinInput.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div ref="ref" v-bind="api.rootProps" :class="pinInputClasses.root">
    <input
      v-bind="api.getInputProps({ index: 0 })"
      :class="pinInputClasses.input"
    />
    <input
      v-bind="api.getInputProps({ index: 1 })"
      :class="pinInputClasses.input"
    />
    <input
      v-bind="api.getInputProps({ index: 2 })"
      :class="pinInputClasses.input"
    />
  </div>
</template>
