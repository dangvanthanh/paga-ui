<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { combobox } from '@/styled-system/recipes'
import * as zagCombobox from '@zag-js/combobox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, ref } from 'vue'

const styles = combobox()

const comboboxData = [
	{ label: 'React', code: 'react' },
	{ label: 'Solid', code: 'solid' },
	{ label: 'Vue', code: 'vue' },
]

const options = ref(comboboxData)

const collectionRef = computed(() =>
	zagCombobox.collection({
		items: options.value,
		itemToValue: (item) => item.code,
		itemToString: (item) => item.label,
	}),
)

const [state, send] = useMachine(
	zagCombobox.machine({
		id: useId('combobox'),
		collection: collectionRef.value,
		value: ['react'],
		onOpenChange(details) {
			if (!details.open) return
			options.value = comboboxData
		},
		onInputValueChange({ inputValue }) {
			const filtered = comboboxData.filter((item) =>
				item.label.toLowerCase().includes(inputValue.toLowerCase()),
			)
			options.value = filtered.length > 0 ? filtered : comboboxData
		},
	}),
	{
		context: computed(() => ({
			collection: collectionRef.value,
		})),
	},
)

const api = computed(() =>
	zagCombobox.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getControlProps()" :class="styles.control">
      <input v-bind="api.getInputProps()" :class="styles.input" />
      <button v-bind="api.getTriggerProps()" :class="styles.trigger">▼</button>
    </div>
  </div>
  <div v-bind="api.getPositionerProps()">
    <ul v-if="options.length > 0" v-bind="api.getContentProps()" :class="styles.content">
      <li v-for="item in options" :key="item.code" v-bind="api.getItemProps({ item })" :class="styles.item">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>