<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { radioGroup } from '@/styled-system/recipes'
import * as zagRadio from '@zag-js/radio-group'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const styles = radioGroup()
const items = [
	{ id: 'svelte', label: 'Svelte' },
	{ id: 'solid', label: 'Solid' },
	{ id: 'vue', label: 'Vue' },
]
const [state, send] = useMachine(
	zagRadio.machine({ id: useId('radioGroup'), value: 'vue' }),
)
const api = computed(() => zagRadio.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-for="opt in items" :key="opt.id" :class="styles.item">
      <label v-bind="api.getItemProps({ value: opt.id })" :class="styles.label">
        <div v-bind="api.getItemControlProps({ value: opt.id })" :class="styles.itemControl" />
        <span v-bind="api.getItemTextProps({ value: opt.id })" :class="styles.itemText">{{ opt.label }}</span>
        <input v-bind="api.getItemHiddenInputProps({ value: opt.id })" />
      </label>
    </div>
  </div>
</template>