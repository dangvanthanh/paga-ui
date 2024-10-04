<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { progressCircular } from '@/styled-system/recipes'
import * as zagProgress from '@zag-js/progress'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const styles = progressCircular()
const [state, send] = useMachine(
	zagProgress.machine({ id: useId('progressCircular'), value: 80 }),
)
const api = computed(() =>
	zagProgress.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <svg v-bind="api.getCircleProps()" :class="styles.circle">
      <circle v-bind="api.getCircleTrackProps()" :class="styles.circleTrack" />
      <circle v-bind="api.getCircleRangeProps()" :class="styles.circleRange" />
    </svg>
  </div>
</template>