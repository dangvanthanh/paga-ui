<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { flex } from '@/styled-system/patterns'
import * as timer from '@zag-js/timer'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const [state, send] = useMachine(
	timer.machine({
		id: useId('timer'),
		countdown: true,
		autoStart: true,
		startMs: timer.parse({ days: 2, seconds: 10 }),
		onComplete() {
			console.log('Timer completed')
		},
	}),
)

const api = computed(() => timer.connect(state.value, send, normalizeProps))
</script>

<template>
  <div>
    <div v-bind="api.getRootProps()" :class="flex({ gap: 2, justify: 'center' })">
      <div v-bind="api.getItemProps({ type: 'days' })">
        {{ api.formattedTime.days }}
      </div>
      <div v-bind="api.getSeparatorProps()">:</div>
      <div v-bind="api.getItemProps({ type: 'hours' })">
        {{ api.formattedTime.hours }}
      </div>
      <div v-bind="api.getSeparatorProps()">:</div>
      <div v-bind="api.getItemProps({ type: 'minutes' })">
        {{ api.formattedTime.minutes }}
      </div>
      <div v-bind="api.getSeparatorProps()">:</div>
      <div v-bind="api.getItemProps({ type: 'seconds' })">
        {{ api.formattedTime.seconds }}
      </div>
    </div>
    <div :class="flex({ gap: 2, fontSize: 'sm' })">
      <button @click="api.start">START</button>
      <button @click="api.pause">PAUSE</button>
      <button @click="api.resume">RESUME</button>
      <button @click="api.reset">RESET</button>
    </div>
  </div>
</template>
