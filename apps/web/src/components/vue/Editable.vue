<script setup lang="ts">
import * as zagEditable from '@zag-js/editable'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'
import { editable } from '@/styled-system/recipes'

const styles = editable()

const service = useMachine(zagEditable.machine, {
	id: useId(),
	defaultValue: 'Editable...',
})
const api = computed(() => zagEditable.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getAreaProps()" :class="styles.area">
			<input v-bind="api.getInputProps()" :class="styles.input">
			<span v-bind="api.getPreviewProps()" :class="styles.preview"/>
		</div>
	</div>
</template>
