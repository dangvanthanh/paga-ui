<script setup lang="ts">
import * as zagEditable from '@zag-js/editable';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { editable } from "~/styled-system/recipes";

const editableClasses = editable();

const [state, send] = useMachine(zagEditable.machine({ id: '1', value: 'Editable...' }));
const api = computed(() => zagEditable.connect(state.value, send, normalizeProps));
</script>

<template>
  <div v-bind="api.rootProps" :class="editableClasses.root">
    <div v-bind="api.areaProps" :class="editableClasses.area">
      <input v-bind="api.inputProps" :class="editableClasses.input" />
      <span v-bind="api.previewProps" />
    </div>
  </div>
</template>
