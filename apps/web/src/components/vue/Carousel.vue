<script setup lang="ts">
import { css } from '@/styled-system/css'
import { carousel } from '@/styled-system/recipes'
import * as zagCarousel from '@zag-js/carousel'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed, useId } from 'vue'

const styles = carousel()

const items = [
	'https://tinyurl.com/5b6ka8jd',
	'https://tinyurl.com/7rmccdn5',
	'https://tinyurl.com/59jxz9uu',
]

const [state, send] = useMachine(zagCarousel.machine({ id: useId() }))

const api = computed(() =>
	zagCarousel.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div ref="ref" v-bind="api.getRootProps()" :class="styles.root">
    <button v-bind="api.getPrevTriggerProps()" :class="styles.prevTrigger">
      <ChevronLeft :class="css({ w: 6, h: 6 })" />
    </button>
    <button v-bind="api.getNextTriggerProps()" :class="styles.nextTrigger">
      <ChevronRight :class="css({ w: 6, h: 6 })" />
    </button>
    <div v-bind="api.getViewportProps()" :class="styles.viewport">
      <div v-bind="api.getItemGroupProps()">
        <div v-for="(image, index) in items" :key="index" v-bind="api.getItemProps({ index: index })">
          <img :src="image" alt="" :style="{
            height: '300px',
            width: '100%',
            objectFit: 'cover',
          }" />
        </div>
      </div>
    </div>
  </div>
</template>