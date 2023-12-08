<script setup>
import * as zagToggle from '@zag-js/toggle-group';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { toggleGroup } from '@styled-system/recipes';

const toggleGroupClasses = toggleGroup();

const [state, send] = useMachine(zagToggle.machine({ id: '1', multiple: true }));
const api = computed(() => zagToggle.connect(state.value, send, normalizeProps));
</script>

<template>
  <div v-bind="api.rootProps" :class="toggleGroupClasses.root">
    <button v-bind="api.getItemProps({ value: 'bold' })" :class="toggleGroupClasses.item">B</button>
    <button v-bind="api.getItemProps({ value: 'italic' })" :class="toggleGroupClasses.item">I</button>
    <button v-bind="api.getItemProps({ value: 'underline' })" :class="toggleGroupClasses.item">U</button>
  </div>
</template>