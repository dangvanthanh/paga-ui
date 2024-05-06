<script setup>
import { useId } from '@/hooks/useId'
import { tabs } from '@/styled-system/recipes'
import * as zagTabs from '@zag-js/tabs'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const styles = tabs()
const id = useId('tabs')

const data = [
	{
		value: 'item-1',
		label: 'React',
		content: 'React is the library for web and native user interfaces.',
	},
	{
		value: 'item-2',
		label: 'Vue',
		content:
			'An approachable, performant and versatile famework for building web user interfaces.',
	},
	{
		value: 'item-3',
		label: 'Solid',
		content: 'Simple and performant reactivity for building user interfaces.',
	},
]

const [state, send] = useMachine(zagTabs.machine({ id, value: 'item-1' }))
const api = computed(() => zagTabs.connect(state.value, send, normalizeProps))
</script>

<template>
  <div ref="ref" v-bind="api.rootProps" :class="styles.root">
    <div v-bind="api.tablistProps" :class="styles.list">
      <button v-for="item in data" v-bind="api.getTriggerProps({ value: item.value })" :key="item.value"
        :class="styles.trigger">
        {{ item.label }}
      </button>
    </div>
    <div v-for="item in data" v-bind="api.getContentProps({ value: item.value })" key="{item.value}"
      :class="styles.content">
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>