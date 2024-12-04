<script setup lang="ts">
import { select } from '@/styled-system/recipes'
import * as zagSelect from '@zag-js/select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = select()

const selectData = [
	{ label: 'React', value: 'react' },
	{ label: 'Solid', value: 'solid' },
	{ label: 'Vue', value: 'vue' },
]

const [state, send] = useMachine(
	zagSelect.machine({
		id: useId(),
		collection: zagSelect.collection({
			items: selectData,
		}),
		value: ['vue'],
	}),
)

const api = computed(() => zagSelect.connect(state.value, send, normalizeProps))
</script>

<template>
  <div :class="styles.root">
    <button v-bind="api.getTriggerProps()" :class="styles.trigger">
      <span>{{ api.valueAsString || 'Select option' }}</span>
      <span>▼</span>
    </button>
  </div>
  <Teleport to="body">
    <div v-bind="api.getPositionerProps()">
      <ul v-bind="api.getContentProps()" :class="styles.content">
        <li v-for="item in selectData" :key="item.value" v-bind="api.getItemProps({ item })" :class="styles.item">
          <span :class="styles.itemLabel">{{ item.label }}</span>
          <span v-bind="api.getItemIndicatorProps({ item })" :class="styles.itemIndicator">✓</span>
        </li>
      </ul>
    </div>
  </Teleport>
</template>