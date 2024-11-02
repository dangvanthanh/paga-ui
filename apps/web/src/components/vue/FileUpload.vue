<script setup lang="ts">
import { fileUpload } from '@/styled-system/recipes'
import * as zagFileUpload from '@zag-js/file-upload'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = fileUpload()
const [state, send] = useMachine(
	zagFileUpload.machine({ id: useId() }),
)
const api = computed(() =>
	zagFileUpload.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getDropzoneProps()" :class="styles.dropzone">
      <input v-bind="api.getHiddenInputProps()" />
      <span :class="styles.label">Drag and drop, or&nbsp;</span>
      <button v-bind="api.getTriggerProps()" :class="styles.trigger">click to select</button>
    </div>

    <ul v-bind="api.getItemGroupProps()">
      <li v-for="file in api.files" :key="file.name" v-bind="api.getItemProps({ file })" :class="styles.item">
        <div v-bind="api.getItemNameProps({ file })" :class="styles.itemName">
          {{ file.name }}
        </div>
        <button v-bind="api.getItemDeleteTriggerProps({ file })">
          <small>&#x2715;</small>
        </button>
      </li>
    </ul>
  </div>
</template>