<script setup lang="ts">
import { tagsInput } from '@/styled-system/recipes'
import * as zagTagsInput from '@zag-js/tags-input'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = tagsInput()

const service = useMachine(zagTagsInput.machine, {
	id: useId(),
	defaultValue: ['React', 'Vue', 'Solid'],
})
const api = computed(() => zagTagsInput.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div :class="styles.control">
			<span v-for="(value, index) in api.value" :key="index">
				<div v-bind="api.getItemProps({ index, value })" :class="styles.tag">
					<div v-bind="api.getItemPreviewProps({ index, value })">
						<span>{{ value }}</span>
						<button v-bind="api.getItemDeleteTriggerProps({ index, value })">
							<small>&#x2715;</small>
						</button>
					</div>
				</div>
				<input
					v-bind="api.getItemInputProps({ index, value })"
					:class="styles.input"
				>
			</span>
			<input
				placeholder="Add tag..."
				v-bind="api.getInputProps()"
				:class="styles.input"
			>
		</div>
	</div>
</template>
