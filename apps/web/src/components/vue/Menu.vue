<script setup lang="ts">
import { menu } from '@/styled-system/recipes'
import * as zagMenu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = menu()

const service = useMachine(zagMenu.machine, { id: useId() })
const api = computed(() => zagMenu.connect(service, normalizeProps))
</script>

<template>
	<div>
		<button v-bind="api.getTriggerProps()" :class="styles.trigger">
			Actions <span aria-hidden>▾</span>
		</button>
		<div v-bind="api.getPositionerProps()">
			<ul v-bind="api.getContentProps()" :class="styles.content">
				<li v-bind="api.getItemProps({ value: 'edit' })" :class="styles.item">
					Edit
				</li>
				<li
					v-bind="api.getItemProps({ value: 'duplicate' })"
					:class="styles.item"
				>
					Duplicate
				</li>
				<li v-bind="api.getItemProps({ value: 'delete' })" :class="styles.item">
					Delete
				</li>
				<li v-bind="api.getItemProps({ value: 'export' })" :class="styles.item">
					Export
				</li>
			</ul>
		</div>
	</div>
</template>
