<script setup>
import * as zagSelect from '@zag-js/select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, Teleport } from 'vue'
import { select } from '@/styled-system/recipes'

const styles = select()

const selectData = [
	{ label: 'React', value: 'react' },
	{ label: 'Solid', value: 'solid' },
	{ label: 'Vue', value: 'vue' },
]

const [state, send] = useMachine(
	zagSelect.machine({
		id: '1',
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
    <button v-bind="api.triggerProps" :class="styles.trigger">
      <span>{{ api.valueAsString || 'Select option' }}</span>
      <span>▼</span>
    </button>
  </div>

  <Teleport to="body">
    <div v-bind="api.positionerProps">
      <ul v-bind="api.contentProps" :class="styles.content">
        <li v-for="item in selectData" :key="item.value" v-bind="api.getItemProps({ item })" :class="styles.item">
          <span :class="styles.itemLabel">{{ item.label }}</span>
          <span v-bind="api.getItemIndicatorProps({ item })" :class="styles.itemIndicator">✓</span>
        </li>
      </ul>
    </div>
  </Teleport>
</template>