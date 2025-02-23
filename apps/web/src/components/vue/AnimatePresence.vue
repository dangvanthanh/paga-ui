<script setup lang="ts">
import * as zagPresence from '@zag-js/presence'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const props = defineProps<{
	present: boolean
	unmountOnExit?: boolean
}>()

const emit = defineEmits<(e: 'exit-complete') => void>()

const service = useMachine(zagPresence.machine, {
	get present() {
		return props.present
	},
	onExitComplete: () => emit('exit-complete'),
})
const api = computed(() => zagPresence.connect(service, normalizeProps))

const unmount = computed(() => !api.value.present && props.unmountOnExit)
</script>

<template>
	<div v-show="!unmount" :hidden="!api.present" :data-state="api.skip ? undefined : present ? 'open' : 'closed'"
		v-bind="$attrs">
		<slot />
	</div>
</template>