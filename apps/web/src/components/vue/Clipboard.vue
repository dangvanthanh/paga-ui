<script setup lang="ts">
import { clipboard } from '@/styled-system/recipes'
import * as zagClipboard from '@zag-js/clipboard'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ClipboardCheck, ClipboardCopyIcon } from 'lucide-vue-next'
import { computed, useId } from 'vue'

const styles = clipboard()

const service = useMachine(zagClipboard.machine, {
	id: useId(),
	value: 'https://github.com/dangvanthanh/paga-ui',
})
const api = computed(() => zagClipboard.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getControlProps()" :class="styles.control">
			<input v-bind="api.getInputProps()" :class="styles.input">
			<button v-bind="api.getTriggerProps()" :class="styles.trigger">
				<ClipboardCheck v-if="api.copied"/>
				<ClipboardCopyIcon v-else/>
			</button>
		</div>
	</div>
</template>
