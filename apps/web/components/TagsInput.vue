<script setup lang="ts">
import * as zagTagsInput from '@zag-js/tags-input';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { tagsInput } from '~/styled-system/recipes';

const tagsInputClasses = tagsInput();

const [state, send] = useMachine(
  zagTagsInput.machine({
    id: '1',
    value: ['React', 'Vue', 'Solid'],
  })
);
const api = computed(() =>
  zagTagsInput.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div ref="ref" v-bind="api.rootProps" :class="tagsInputClasses.root">
    <div :class="tagsInputClasses.control">
      <span v-for="(value, index) in api.value" :key="index">
        <div
          v-bind="api.getItemProps({ index, value })"
          :class="tagsInputClasses.tag"
        >
          <span>{{ value }}</span>
          <button v-bind="api.getItemDeleteTriggerProps({ index, value })">
            <small>&#x2715;</small>
          </button>
        </div>
        <input
          v-bind="api.getItemInputProps({ index, value })"
          :class="tagsInputClasses.input"
        />
      </span>
      <input
        placeholder="Add tag..."
        v-bind="api.inputProps"
        :class="tagsInputClasses.input"
      />
    </div>
  </div>
</template>
