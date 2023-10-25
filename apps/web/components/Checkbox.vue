<script setup lang="ts">
import * as zagCheckbox from '@zag-js/checkbox';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { checkbox } from '~/styled-system/recipes';

const checkboxClasses = checkbox()

const [state, send] = useMachine(zagCheckbox.machine({ id: '1' }));
const api = computed(() => zagCheckbox.connect(state.value, send, normalizeProps))
</script>

<template>
  <label v-bind="api.rootProps" :class="checkboxClasses.root">
    <div v-bind="api.controlProps" :class="checkboxClasses.control" />
    <input v-bind="api.hiddenInputProps" />
    <span v-bind="api.labelProps" :class="checkboxClasses.label">
      <span v-if="api.isChecked"> Checked</span>
      <span v-else> Unchecked</span>
    </span>
  </label>
</template>