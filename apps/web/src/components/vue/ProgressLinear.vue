<script setup lang="ts">
import { progressLinear } from '@/styled-system/recipes'
import * as zagProgress from '@zag-js/progress'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = progressLinear()

const service = useMachine(zagProgress.machine, {
	id: useId(),
	defaultValue: 50,
})
const api = computed(() => zagProgress.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getTrackProps()" :class="styles.track">
			<div v-bind="api.getRangeProps()" :class="styles.range" />
		</div>
	</div>
</template>