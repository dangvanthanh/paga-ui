<script setup lang="ts">
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { button, timer } from '@/styled-system/recipes'
import * as zagTimer from '@zag-js/timer'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Pause, Play, RotateCcw } from 'lucide-vue-next'
import { computed, useId } from 'vue'

const styles = timer()

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
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getAreaProps()" :class="styles.area">
      <div v-bind="api.getItemProps({ type: 'days' })" :class="styles.item">
        <span :class="css({ fontSize: '2xl' })">{{ api.formattedTime.days }}</span>
        <span :class="css({ fontSize: 'xs', color: 'gray.500' })">days</span>
      </div>
      <div v-bind="api.getSeparatorProps()" :class="styles.separator">:</div>
      <div v-bind="api.getItemProps({ type: 'hours' })" :class="styles.item">
        <span :class="css({ fontSize: '2xl' })"> {{ api.formattedTime.hours }}</span>
        <span :class="css({ fontSize: 'xs', color: 'gray.500' })">hours</span>
      </div>
      <div v-bind="api.getSeparatorProps()" :class="styles.separator">:</div>
      <div v-bind="api.getItemProps({ type: 'minutes' })" :class="styles.item">
        <span :class="css({ fontSize: '2xl' })"> {{ api.formattedTime.minutes }}</span>
        <span :class="css({ fontSize: 'xs', color: 'gray.500' })">minutes</span>
      </div>
      <div v-bind="api.getSeparatorProps()" :class="styles.separator">:</div>
      <div v-bind="api.getItemProps({ type: 'seconds' })" :class="styles.item">
        <span :class="css({ fontSize: '2xl' })"> {{ api.formattedTime.seconds }}</span>
        <span :class="css({ fontSize: 'xs', color: 'gray.500' })">seconds</span>
      </div>
    </div>
    <div :class="flex({ justify: 'center', gap: 2 })">
      <button @click="api.start" v-show="!api.running && !api.paused" :class="button({ variant: 'ghost' })">
        <Play :size="16" />
        Start
      </button>
      <button @click="api.pause" v-show="api.running" :class="button({ variant: 'ghost' })">
        <Pause :size="16" />
        Pause
      </button>
      <button @click="api.resume" v-show="api.paused" :class="button({ variant: 'ghost' })">
        <Play :size="16" />
        Resume
      </button>
      <button @click="api.reset" v-show="api.running || api.paused" :class="button({ variant: 'ghost' })">
        <RotateCcw :size="16" />
        Reset
      </button>
    </div>
  </div>
</template>