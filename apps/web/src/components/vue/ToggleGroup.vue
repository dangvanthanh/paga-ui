<script setup lang="ts">
import { toggleGroup } from '@/styled-system/recipes'
import * as zagToggle from '@zag-js/toggle-group'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = toggleGroup()

const service = useMachine(zagToggle.machine, { id: useId(), multiple: true })
const api = computed(() => zagToggle.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<button v-bind="api.getItemProps({ value: 'bold' })" :class="styles.item">B</button>
		<button v-bind="api.getItemProps({ value: 'italic' })" :class="styles.item">
			I
		</button>
		<button v-bind="api.getItemProps({ value: 'underline' })" :class="styles.item">
			U
		</button>
	</div>
</template>