<script setup>
import * as zagSlider from '@zag-js/slider'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { slider } from '@/styled-system/recipes'

const styles = slider({ size: 'sm' })

const [state, send] = useMachine(
	zagSlider.machine({ id: '1', value: [30, 60], min: 0, max: 100 }),
)
const api = computed(() => zagSlider.connect(state.value, send, normalizeProps))
</script>

<template>
  <div ref="ref" v-bind="api.rootProps" :class="styles.root">
    <div v-bind="api.controlProps" :class="styles.control">
      <div v-bind="api.trackProps" :class="styles.track">
        <div v-bind="api.rangeProps" :class="styles.range" />
      </div>
      <div v-for="(_, index) in api.value" :key="index" v-bind="api.getThumbProps({ index })" :class="styles.thumb">
        <input v-bind="api.getHiddenInputProps({ index })" />
      </div>
    </div>
  </div>
</template>