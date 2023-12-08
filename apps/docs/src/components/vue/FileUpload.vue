<script setup>
import * as zagFileUpload from '@zag-js/file-upload'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { fileUpload } from '@styled-system/recipes';

const fileUploadClasses = fileUpload()

const [state, send] = useMachine(zagFileUpload.machine({ id: '1' }))

const api = computed(() =>
  zagFileUpload.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.rootProps" :class="fileUploadClasses.root">
    <div v-bind="api.dropzoneProps" :class="fileUploadClasses.dropzone">
      <input v-bind="api.hiddenInputProps" />
      <span :class="fileUploadClasses.label">Drag and drop, or&nbsp;</span>
      <button v-bind="api.triggerProps" :class="fileUploadClasses.trigger">click to select</button>
    </div>

    <ul v-bind="api.itemGroupProps">
      <li v-for="file in api.files" :key="file.name" v-bind="api.getItemProps({ file })" :class="fileUploadClasses.item">
        <div v-bind="api.getItemNameProps({ file })" :class="fileUploadClasses.itemName">{{ file.name }}</div>
        <button v-bind="api.getItemDeleteTriggerProps({ file })">
          <small>&#x2715;</small>
        </button>
      </li>
    </ul>
  </div>
</template>
