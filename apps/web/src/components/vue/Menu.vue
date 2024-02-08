<script setup>
import * as zagMenu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { menu } from '@/styled-system/recipes'

const styles = menu()

const [state, send] = useMachine(zagMenu.machine({ id: '1' }))
const api = computed(() => zagMenu.connect(state.value, send, normalizeProps))
</script>

<template>
  <div>
    <button v-bind="api.triggerProps" :class="styles.trigger">
      Actions <span aria-hidden>▾</span>
    </button>
    <div v-bind="api.positionerProps">
      <ul v-bind="api.contentProps" :class="styles.content">
        <li v-bind="api.getItemProps({ id: 'edit' })" :class="styles.item">Edit</li>
        <li v-bind="api.getItemProps({ id: 'duplicate' })" :class="styles.item">Duplicate</li>
        <li v-bind="api.getItemProps({ id: 'delete' })" :class="styles.item">Delete</li>
        <li v-bind="api.getItemProps({ id: 'export' })" :class="styles.item">Export</li>
      </ul>
    </div>
  </div>
</template>