<script setup lang="ts">
import { css } from '@/styled-system/css'
import * as zagCollapsible from '@zag-js/collapsible'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const [state, send] = useMachine(zagCollapsible.machine({ id: useId() }))

const api = computed(() =>
	zagCollapsible.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.getRootProps()">
    <button v-bind="api.getTriggerProps()" :class="css({ fontSize: 'sm' })">Collapsible Trigger</button>
    <div v-bind="api.getContentProps()"
      :class="css({ bg: 'white', fontSize: 'sm', borderWidth: 1, borderColor: 'slate.300', p: 2 })">
      Lorem dfd dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna sfsd. Ut enim ad minimdfd v eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
      id est laborum. </div>
  </div>
</template>