<script setup>
import * as zagSwitch from "@zag-js/switch";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { switches } from "@styled-system/recipes";

const props = defineProps({
  label: String,
});

const switchClasses = switches({ size: "sm" });

const [state, send] = useMachine(zagSwitch.machine({ id: "1" }));

const api = computed(() =>
  zagSwitch.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <label v-bind="api.rootProps" :class="switchClasses.root">
    <input v-bind="api.hiddenInputProps" />
    <span v-bind="api.controlProps" :class="switchClasses.control">
      <span v-bind="api.thumbProps" :class="switchClasses.thumb"></span>
    </span>
    <span
      v-if="props.label"
      v-bind="api.labelProps"
      :class="switchClasses.label"
    >
      <span v-if="api.isChecked">{{ props.label }}</span>
      <span v-else>{{ props.label }}</span>
    </span>
  </label>
</template>
