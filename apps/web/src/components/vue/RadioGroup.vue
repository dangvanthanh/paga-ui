<script setup lang="ts">
import { radioGroup } from '@/styled-system/recipes'
import * as zagRadio from '@zag-js/radio-group'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = radioGroup()

const items = [
	{ id: 'svelte', label: 'Svelte' },
	{ id: 'solid', label: 'Solid' },
	{ id: 'vue', label: 'Vue' },
]

const service = useMachine(zagRadio.machine, {
	id: useId(),
	defaultValue: 'vue',
})
const api = computed(() => zagRadio.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-for="opt in items" :key="opt.id" :class="styles.item">
			<label v-bind="api.getItemProps({ value: opt.id })" :class="styles.label">
				<div v-bind="api.getItemControlProps({ value: opt.id })" :class="styles.itemControl" />
				<span v-bind="api.getItemTextProps({ value: opt.id })" :class="styles.itemText">{{ opt.label }}</span>
				<input v-bind="api.getItemHiddenInputProps({ value: opt.id })" />
			</label>
		</div>
	</div>
</template>