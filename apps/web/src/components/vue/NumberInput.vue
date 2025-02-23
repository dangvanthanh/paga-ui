<script setup lang="ts">
import { numberInput } from '@/styled-system/recipes'
import * as zagNumberInput from '@zag-js/number-input'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = numberInput()

const service = useMachine(zagNumberInput.machine, {
	id: useId(),
	defaultValue: '14',
})
const api = computed(() => zagNumberInput.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div :class="styles.control">
			<input v-bind="api.getInputProps()" :class="styles.input" />
			<div>
				<button v-bind="api.getIncrementTriggerProps()" :class="styles.incrementTrigger">
					+
				</button>
				<button v-bind="api.getDecrementTriggerProps()" :class="styles.decrementTrigger">
					-
				</button>
			</div>
		</div>
	</div>
</template>