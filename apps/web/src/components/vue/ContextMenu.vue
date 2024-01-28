<script setup>
import * as zagMenu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { menu } from '@/styled-system/recipes'

const menuClasses = menu()

const [state, send] = useMachine(zagMenu.machine({ id: '2', 'aria-label': 'File' }))

const api = computed(() => zagMenu.connect(state.value, send, normalizeProps))
</script>

<template>
  <div>
    <button v-bind="api.contextTriggerProps" :class="menuClasses.trigger">
      <div>Open context menu</div>
    </button>
    <div v-bind="api.positionerProps">
      <ul v-bind="api.contentProps" :class="menuClasses.content">
        <li v-bind="api.getItemProps({ id: 'cut' })" :class="menuClasses.item">Cut</li>
        <li v-bind="api.getItemProps({ id: 'copy' })" :class="menuClasses.item">Copy</li>
        <li v-bind="api.getItemProps({ id: 'copy-as' })" :class="menuClasses.item">Copy As</li>
        <li v-bind="api.getItemProps({ id: 'paste' })" :class="menuClasses.item">Paste</li>
      </ul>
    </div>
  </div>
</template>
