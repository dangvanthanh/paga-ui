<script setup lang="ts">
import * as zagRadio from '@zag-js/radio-group';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { radioGroup } from '~/styled-system/recipes';

const radioGroupClasses = radioGroup();

const items = [
  { id: 'svelte', label: 'Svelte' },
  { id: 'solid', label: 'Solid' },
  { id: 'vue', label: 'Vue' },
]

const [state, send] = useMachine(zagRadio.machine({ id: '1', value: 'vue' }));

const api = computed(() => zagRadio.connect(state.value, send, normalizeProps));
</script>

<template>
  <div v-bind="api.rootProps" :class="radioGroupClasses.root">
    <div v-for="opt in items" :key="opt.id" :class="radioGroupClasses.item">
      <label v-bind="api.getItemProps({ value: opt.id })" :class="radioGroupClasses.label">
        <div v-bind="api.getItemControlProps({ value: opt.id })" :class="radioGroupClasses.itemControl" />
        <span v-bind="api.getItemTextProps({ value: opt.id })" :class="radioGroupClasses.itemText">{{ opt.label }}</span>
        <input v-bind="api.getItemHiddenInputProps({ value: opt.id })" />
      </label>
    </div>
  </div>
</template>