<script setup lang="ts">
import * as zagScrollArea from "@zag-js/scroll-area"
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'
import { css } from 'styled-system/css'

const service = useMachine(zagScrollArea.machine, {
	id: useId(),
})
const api = computed(() => zagScrollArea.connect(service, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-bind="api.getViewportProps()">
      <div v-bind="api.getContentProps()" :class="css({maxH: 400})">
        <div v-for="index in 50" :key="index" :class="css({border: 1, borderColor: 'gray.300', borderStyle: 'solid', py: 3, px: 2,  mb: 1})">
					Item {{ index}}
				</div>
      </div>
    </div>
    <div v-bind="api.getScrollbarProps()">
      <div v-bind="api.getThumbProps()" />
    </div>
  </div>
</template>