<script setup lang="ts">
import { segmentedControl } from '@/styled-system/recipes'
import * as zagRadio from '@zag-js/radio-group'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = segmentedControl()

const items = [
	{ label: 'React', value: 'react-paga' },
	{ label: 'Vue', value: 'vue-paga' },
	{ label: 'Svelte', value: 'svelte-paga' },
]

const service = useMachine(zagRadio.machine, {
	id: useId(),
	defaultValue: 'vue-paga',
})
const api = computed(() => zagRadio.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getIndicatorProps()" :class="styles.indicator" />
		<div v-for="opt in items" :key="opt.value">
			<label v-bind="api.getItemProps({ value: opt.value })" :class="styles.radio">
				<span v-bind="api.getItemTextProps({ value: opt.value })">{{ opt.label }}</span>
				<input v-bind="api.getItemHiddenInputProps({ value: opt.value })" />
			</label>
		</div>
	</div>
</template>