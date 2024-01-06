<script setup>
import * as zagProgressCircular from '@zag-js/progress'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { progressCircular } from '@styled-system/recipes'

const zagProgressClasses = progressCircular()

const [state, send] = useMachine(zagProgressCircular.machine({ id: '1', value: 20 }))

const api = computed(() => zagProgressCircular.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.rootProps" :class="zagProgressClasses.root">
    <svg v-bind="api.circleProps">
      <circle v-bind="api.circleTrackProps" fill="white" />
      <circle v-bind="api.circleRangeProps" fill="gray" />
    </svg>
  </div>
</template>
