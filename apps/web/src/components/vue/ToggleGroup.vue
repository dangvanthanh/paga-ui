<script setup>
import * as zagToggle from '@zag-js/toggle-group'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { toggleGroup } from '@/styled-system/recipes'

const styles = toggleGroup()

const [state, send] = useMachine(zagToggle.machine({ id: '1', multiple: true }))
const api = computed(() => zagToggle.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <button v-bind="api.getItemProps({ value: 'bold' })" :class="styles.item">B</button>
    <button v-bind="api.getItemProps({ value: 'italic' })" :class="styles.item">
      I
    </button>
    <button v-bind="api.getItemProps({ value: 'underline' })" :class="styles.item">
      U
    </button>
  </div>
</template>