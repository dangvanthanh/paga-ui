<script setup lang="ts">
import * as zagSlider from "@zag-js/slider";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { slider } from "~/styled-system/recipes";

const props = defineProps<{
  id: string;
}>();

const sliderClasses = slider({ size: "sm" });

const [state, send] = useMachine(
  zagSlider.machine({ id: props.id, value: [30], min: 0, max: 100 })
);
const api = computed(() =>
  zagSlider.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div ref="ref" v-bind="api.rootProps" :class="sliderClasses.root">
    <div v-bind="api.controlProps" :class="sliderClasses.control">
      <div v-bind="api.trackProps" :class="sliderClasses.track">
        <div v-bind="api.rangeProps" :class="sliderClasses.range" />
      </div>
      <div
        v-for="(_, index) in api.value"
        :key="index"
        v-bind="api.getThumbProps({ index })"
        :class="sliderClasses.thumb"
      >
        <input v-bind="api.getHiddenInputProps({ index })" />
      </div>
    </div>
  </div>
</template>
