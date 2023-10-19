<script setup>
import * as zagPinInput from "@zag-js/pin-input";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";

const [state, send] = useMachine(zagPinInput.machine({ id: "1" }));
const api = computed(() =>
  zagPinInput.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div ref="ref" v-bind="api.rootProps">
    <input v-bind="api.getInputProps({ index: 0 })" />
    <input v-bind="api.getInputProps({ index: 1 })" />
    <input v-bind="api.getInputProps({ index: 2 })" />
  </div>
</template>
