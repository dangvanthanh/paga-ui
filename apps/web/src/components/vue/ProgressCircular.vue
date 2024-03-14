<script setup>
import * as zagProgress from '@zag-js/progress'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { progressCircular } from '@/styled-system/recipes'

const styles = progressCircular()

const [state, send] = useMachine(zagProgress.machine({ id: '1', value: 80 }))

const api = computed(() =>
	zagProgress.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <svg v-bind="api.circleProps" :class="styles.circle">
      <circle v-bind="api.circleTrackProps" :class="styles.circleTrack" />
      <circle v-bind="api.circleRangeProps" :class="styles.circleRange" />
    </svg>
  </div>
</template>