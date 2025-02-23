<script setup lang="ts">
import { css, cx } from '@/styled-system/css'
import { flex, grid } from '@/styled-system/patterns'
import { colorPicker } from '@/styled-system/recipes'
import * as zagColorPicker from '@zag-js/color-picker'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Pipette } from 'lucide-vue-next'
import { computed, ref, useId } from 'vue'

const styles = colorPicker()

const presets = ref([
	'#202020',
	'#d13415',
	'#ca244d',
	'#c2298a',
	'#ffba18',
	'#b0e64c',
	'#7ce2fe',
])

const service = useMachine(zagColorPicker.machine, {
	id: useId(),
	defaultValue: zagColorPicker.parse('#202020'),
})
const api = computed(() => zagColorPicker.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<label v-bind="api.getLabelProps()" :class="styles.label">Color Picker</label>
		<input v-bind="api.getHiddenInputProps()" />
		<div v-bind="api.getControlProps()" :class="styles.control">
			<button v-bind="api.getTriggerProps()" :class="styles.trigger">
				<div v-bind="api.getTransparencyGridProps({ size: '10px' })" :class="styles.transparencyGrid" />
				<div v-bind="api.getSwatchProps({ value: api.value })" :class="styles.swatch" />
			</button>
			<input v-bind="api.getChannelInputProps({ channel: 'hex' })" :class="styles.input" />
			<input v-bind="api.getChannelInputProps({ channel: 'alpha' })" :class="styles.input" />
		</div>
		<div v-bind="api.getPositionerProps()">
			<div v-bind="api.getContentProps()" :class="styles.content">
				<div v-bind="api.getAreaProps()" :class="styles.area">
					<div v-bind="api.getAreaBackgroundProps()" :class="styles.areaBackground" />
					<div v-bind="api.getAreaThumbProps()" />
				</div>

				<div :class="flex({ align: 'center', gap: 5 })">
					<div :class="css({ flex: '1 1 0%' })">
						<div v-bind="api.getChannelSliderProps({ channel: 'hue' })" :class="styles.channelSlider">
							<div v-bind="api.getChannelSliderTrackProps({ channel: 'hue' })" :class="styles.channelSliderTrack" />
							<div v-bind="api.getChannelSliderThumbProps({ channel: 'hue' })" :class="styles.channelSliderThumb" />
						</div>
						<div :class="css({ my: 3 })"></div>
						<div v-bind="api.getChannelSliderProps({ channel: 'alpha' })" :class="styles.channelSlider">
							<div v-bind="api.getTransparencyGridProps({ size: '12px' })" />
							<div v-bind="api.getChannelSliderTrackProps({ channel: 'alpha' })" :class="styles.channelSliderTrack" />
							<div v-bind="api.getChannelSliderThumbProps({ channel: 'alpha' })" :class="styles.channelSliderThumb" />
						</div>
					</div>
					<button v-bind="api.getEyeDropperTriggerProps()" :class="styles.eyeDropperTrigger">
						<Pipette />
					</button>
				</div>

				<template v-if="api.format === 'rgba'">
					<div :class="grid({ columns: 4 })">
						<div :class="flex({ direction: 'column', gap: 1 })">
							<input v-bind="api.getChannelInputProps({ channel: 'red' })"
								:class="cx(styles.input, css({ textAlign: 'center' }))" />
							<span :class="css({ display: 'block', textAlign: 'center' })">R</span>
						</div>

						<div :class="flex({ direction: 'column', gap: 1 })">
							<input v-bind="api.getChannelInputProps({ channel: 'green' })"
								:class="cx(styles.input, css({ textAlign: 'center' }))" />
							<span :class="css({ display: 'block', textAlign: 'center' })">G</span>
						</div>

						<div :class="flex({ direction: 'column', gap: 1 })">
							<input v-bind="api.getChannelInputProps({ channel: 'blue' })"
								:class="cx(styles.input, css({ textAlign: 'center' }))" />
							<span :class="css({ display: 'block', textAlign: 'center' })">B</span>
						</div>

						<div :class="flex({ direction: 'column', gap: 1 })">
							<input v-bind="api.getChannelInputProps({ channel: 'alpha' })"
								:class="cx(styles.input, css({ textAlign: 'center' }))" />
							<span :class="css({ display: 'block', textAlign: 'center' })">A</span>
						</div>
					</div>
				</template>

				<div :class="css({ fontWeight: 600 })">Swatches</div>
				<div v-bind="api.getSwatchGroupProps()" :class="styles.swatchGroup">
					<template v-for="preset in presets">
						<button v-bind="api.getSwatchTriggerProps({ value: preset })">
							<div v-bind="api.getTransparencyGridProps()" :class="styles.transparencyGrid" />
							<div v-bind="api.getSwatchProps({ value: preset })" :class="styles.swatch" />
						</button>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>