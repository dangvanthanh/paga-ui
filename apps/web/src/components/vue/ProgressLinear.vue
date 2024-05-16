<script setup>
import { useId } from '@/hooks/useId'
import { progressLinear } from '@/styled-system/recipes'
import * as zagProgress from '@zag-js/progress'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const styles = progressLinear()
const [state, send] = useMachine(
	zagProgress.machine({ id: useId('progressLinear'), value: 20 }),
)
const api = computed(() =>
	zagProgress.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <div v-bind="api.trackProps" :class="styles.track">
      <div v-bind="api.rangeProps" :class="styles.range" />
    </div>
  </div>
</template>