<script setup lang="ts">
import { css } from '@/styled-system/css'
import { angleSlider } from '@/styled-system/recipes'
import * as zagAngleSlider from '@zag-js/angle-slider'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = angleSlider()

const service = useMachine(zagAngleSlider.machine, {
	id: useId(),
	defaultValue: 180,
})
const api = computed(() => zagAngleSlider.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()">
		<div v-bind="api.getControlProps()" :class="styles.control">
			<div v-bind="api.getThumbProps()" :class="styles.thumb"></div>
			<div v-bind="api.getMarkerGroupProps()">
				<div
					v-for="value in [0, 45, 90, 135, 180, 225, 270, 315]"
					:key="value"
					v-bind="api.getMarkerProps({ value })"
					:class="styles.marker"
				></div>
			</div>
		</div>
		<input v-bind="api.getHiddenInputProps()">
		<label
			v-bind="api.getLabelProps()"
			:class="css({ display: 'block', mt: 6, textAlign: 'center' })"
		>
			<div v-bind="api.getValueTextProps()">{{ api.value }}degrees</div>
		</label>
	</div>
</template>
