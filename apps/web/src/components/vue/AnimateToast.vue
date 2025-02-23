<script setup lang="ts">
import * as zagToast from '@zag-js/toast'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const props = defineProps<{
	toast: zagToast.Options
	index: number
	parent: zagToast.GroupService
}>()

const machineProps = computed(() => ({
	...props.toast,
	parent: props.parent,
	index: props.index,
}))

const service = useMachine(zagToast.machine, machineProps)
const api = computed(() => zagToast.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()">
		<h3 v-bind="api.getTitleProps()">{{ api.title }}</h3>
		<p v-bind="api.getDescriptionProps()">{{ api.description }}</p>
		<button @click="api.dismiss()">Close</button>
	</div>
</template>
