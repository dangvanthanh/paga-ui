<script setup lang="ts">
import { pinInput } from '@/styled-system/recipes'
import * as zagPinInput from '@zag-js/pin-input'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = pinInput()

const service = useMachine(zagPinInput.machine, { id: useId() })
const api = computed(() => zagPinInput.connect(service, normalizeProps))
</script>

<template>
	<div ref="ref" v-bind="api.getRootProps()" :class="styles.root">
		<template v-for="item in Array.from({ length: 6 }).map((_, i) => i)">
			<input v-bind="api.getInputProps({ index: item })" :class="styles.input" />
		</template>
	</div>
</template>