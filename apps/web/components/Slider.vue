<script setup lang="ts">
import * as zagSlider from "@zag-js/slider";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { css } from "../styled-system/css";
import { slider } from "../styled-system/recipes";

const sliderClasses = slider({ size: "sm" });

const [state, send] = useMachine(
  zagSlider.machine({ id: "1", value: 30, min: 0, max: 100 })
);
const api = computed(() =>
  zagSlider.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div ref="ref" v-bind="api.rootProps" :class="sliderClasses.root">
    <div :class="css({ display: 'none' })">
      <label v-bind="api.labelProps" :class="sliderClasses.label"
        >Slider Label</label
      >
      <output v-bind="api.outputProps" :class="sliderClasses.output">{{
        api.value
      }}</output>
    </div>
    <div v-bind="api.controlProps" :class="sliderClasses.control">
      <div v-bind="api.trackProps" :class="sliderClasses.track">
        <div v-bind="api.rangeProps" :class="sliderClasses.range" />
      </div>
      <div v-bind="api.thumbProps" :class="sliderClasses.thumb">
        <input v-bind="api.hiddenInputProps" />
      </div>
    </div>
  </div>
</template>
