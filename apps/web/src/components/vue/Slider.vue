<script setup lang="ts">
import { slider } from '@/styled-system/recipes'
import * as zagSlider from '@zag-js/slider'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = slider({ size: 'sm' })

const service = useMachine(zagSlider.machine, {
	id: useId(),
	defaultValue: [30],
	min: 0,
	max: 100,
})
const api = computed(() => zagSlider.connect(service, normalizeProps))
</script>

<template>
	<div ref="ref" v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getControlProps()" :class="styles.control">
			<div v-bind="api.getTrackProps()" :class="styles.track">
				<div v-bind="api.getRangeProps()" :class="styles.range" />
			</div>
			<div v-for="(_, index) in api.value" :key="index" v-bind="api.getThumbProps({ index })" :class="styles.thumb">
				<input v-bind="api.getHiddenInputProps({ index })" />
			</div>
		</div>
	</div>
</template>