<script setup>

import * as zagMenu from '@zag-js/menu';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { menu } from '@styled-system/recipes';

const menuClasses = menu();

const [state, send] = useMachine(zagMenu.machine({ id: '1' }));
const api = computed(() => zagMenu.connect(state.value, send, normalizeProps));
</script>

<template>
  <div>
    <button v-bind="api.triggerProps" :class="menuClasses.trigger">
      Actions <span aria-hidden>▾</span>
    </button>
    <div v-bind="api.positionerProps">
      <ul v-bind="api.contentProps" :class="menuClasses.content">
        <li v-bind="api.getItemProps({ id: 'edit' })" :class="menuClasses.item">Edit</li>
        <li v-bind="api.getItemProps({ id: 'duplicate' })" :class="menuClasses.item">Duplicate</li>
        <li v-bind="api.getItemProps({ id: 'delete' })" :class="menuClasses.item">Delete</li>
        <li v-bind="api.getItemProps({ id: 'export' })" :class="menuClasses.item">
          Export
        </li>
      </ul>
    </div>
  </div>
</template>