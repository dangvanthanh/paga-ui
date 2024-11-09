<script setup lang="ts">
import { flex } from '@/styled-system/patterns'
import * as zagTimer from '@zag-js/timer'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const [state, send] = useMachine(
	zagTimer.machine({
		id: useId(),
		countdown: true,
		autoStart: false,
		startMs: zagTimer.parse({ days: 2, seconds: 0 }),
		onComplete() {
			console.log('Timer completed')
		},
	}),
)

const api = computed(() => zagTimer.connect(state.value, send, normalizeProps))
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
      <button @click="api.start" v-show="!api.running && !api.paused">START</button>
      <button @click="api.pause" v-show="api.running">PAUSE</button>
      <button @click="api.resume" v-show="api.paused">RESUME</button>
      <button @click="api.reset" v-show="api.running || api.paused">RESET</button>
    </div>
  </div>
</template>