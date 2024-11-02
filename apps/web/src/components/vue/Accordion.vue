<script setup lang="ts">
import { accordion } from '@/styled-system/recipes'
import * as zagAccordion from '@zag-js/accordion'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = accordion()

const data = [
	{
		title: 'Solid',
		content: 'Simple and performant reactivity for building user interfaces.',
	},
	{
		title: 'Vue',
		content:
			'An approachable, performant and versatile famework for building web user interfaces.',
	},
]

const [state, send] = useMachine(
	zagAccordion.machine({ id: useId(), value: ['Solid'] }),
)
const api = computed(() =>
	zagAccordion.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div :class="styles.root">
    <div v-for="item in data" :key="item.title" v-bind="api.getItemProps({ value: item.title })" :class="styles.item">
      <button :class="styles.trigger" v-bind="api.getItemTriggerProps({ value: item.title })">
        {{ item.title }}
      </button>
      <div v-bind="api.getItemContentProps({ value: item.title })" :class="styles.content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>