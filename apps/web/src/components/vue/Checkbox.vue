<script setup>
import * as zagCheckbox from '@zag-js/checkbox';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import { css } from '@/styled-system/css';
import { checkbox } from '@/styled-system/recipes';
import { Check } from 'lucide-vue-next';

const checkboxClasses = checkbox()

const [state, send] = useMachine(zagCheckbox.machine({ id: '1' }));
const api = computed(() => zagCheckbox.connect(state.value, send, normalizeProps))
</script>

<template>
  <label v-bind="api.rootProps" :class="checkboxClasses.root">
    <div v-bind="api.controlProps" :class="checkboxClasses.control">
      <span v-if="api.isChecked">
        <Check :class="css({ w: 4, h: 4, color: 'gray.900' })" />
      </span>
    </div>
    <input v-bind="api.hiddenInputProps" />
    <span v-bind="api.labelProps" :class="checkboxClasses.label">
      <span v-if="api.isChecked"> Checked</span>
      <span v-else> Unchecked</span>
    </span>
  </label>
</template>