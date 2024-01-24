<script setup>
import * as zagColorPicker from '@zag-js/color-picker';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { ref, computed } from 'vue';
import { Pipette } from 'lucide-vue-next';
import { cx, css } from '@styled-system/css';
import { flex, grid } from '@styled-system/patterns';
import { colorPicker } from '@styled-system/recipes';

const colorPickerClasses = colorPicker();

const [state, send] = useMachine(zagColorPicker.machine({
  id: '1',
  value: zagColorPicker.parse('#202020')
}))

const api = computed(() => zagColorPicker.connect(state.value, send, normalizeProps));

const presets = ref(['#202020', '#d13415', '#ca244d', '#c2298a', '#ffba18', '#b0e64c', '#7ce2fe']);
</script>

<template>
  <div v-bind="api.rootProps" :class="colorPickerClasses.root">
    <input v-bind="api.hiddenInputProps" />
    <div v-bind="api.controlProps" :class="colorPickerClasses.control">
      <button v-bind="api.triggerProps" :class="colorPickerClasses.trigger">
        <div v-bind="api.getTransparencyGridProps({ size: '10px' })" :class="colorPickerClasses.transparencyGrid" />
        <div v-bind="api.getSwatchProps({ value: api.value })" :class="colorPickerClasses.swatch" />
      </button>
      <input v-bind="api.getChannelInputProps({ channel: 'hex' })" :class="colorPickerClasses.input" />
      <input v-bind="api.getChannelInputProps({ channel: 'alpha' })" :class="colorPickerClasses.input" />
    </div>

    <div v-bind="api.positionerProps">
      <div v-bind="api.contentProps" :class="colorPickerClasses.content">
        <div v-bind="api.getAreaProps()" :class="colorPickerClasses.area">
          <div v-bind="api.getAreaBackgroundProps()" :class="colorPickerClasses.areaBackground" />
          <div v-bind="api.getAreaThumbProps()" />
        </div>

        <div :class="flex({ align: 'center', gap: 5 })">
          <div :class="css({ flex: '1 1 0%' })">
            <div v-bind="api.getChannelSliderProps({ channel: 'hue' })" :class="colorPickerClasses.channelSlider">
              <div v-bind="api.getChannelSliderTrackProps({ channel: 'hue' })"
                :class="colorPickerClasses.channelSliderTrack" />
              <div v-bind="api.getChannelSliderThumbProps({ channel: 'hue' })"
                :class="colorPickerClasses.channelSliderThumb" />
            </div>
            <div :class="css({ my: 3 })"></div>
            <div v-bind="api.getChannelSliderProps({ channel: 'alpha' })" :class="colorPickerClasses.channelSlider">
              <div v-bind="api.getTransparencyGridProps({ size: '12px' })" />
              <div v-bind="api.getChannelSliderTrackProps({ channel: 'alpha' })"
                :class="colorPickerClasses.channelSliderTrack" />
              <div v-bind="api.getChannelSliderThumbProps({ channel: 'alpha' })"
                :class="colorPickerClasses.channelSliderThumb" />
            </div>
          </div>
          <button v-bind="api.eyeDropperTriggerProps" :class="colorPickerClasses.eyeDropperTrigger">
            <Pipette />
          </button>
        </div>

        <template v-if="api.format === 'rgba'">
          <div :class="grid({ columns: 4 })">
            <div :class="flex({ direction: 'column', gap: 1 })">
              <input v-bind="api.getChannelInputProps({ channel: 'red' })"
                :class="cx(colorPickerClasses.input, css({ textAlign: 'center' }))" />
              <span :class="css({ display: 'block', textAlign: 'center' })">R</span>
            </div>

            <div :class="flex({ direction: 'column', gap: 1 })">
              <input v-bind="api.getChannelInputProps({ channel: 'green' })"
                :class="cx(colorPickerClasses.input, css({ textAlign: 'center' }))" />
              <span :class="css({ display: 'block', textAlign: 'center' })">G</span>
            </div>

            <div :class="flex({ direction: 'column', gap: 1 })">
              <input v-bind="api.getChannelInputProps({ channel: 'blue' })"
                :class="cx(colorPickerClasses.input, css({ textAlign: 'center' }))" />
              <span :class="css({ display: 'block', textAlign: 'center' })">B</span>
            </div>

            <div :class="flex({ direction: 'column', gap: 1 })">
              <input v-bind="api.getChannelInputProps({ channel: 'alpha' })"
                :class="cx(colorPickerClasses.input, css({ textAlign: 'center' }))" />
              <span :class="css({ display: 'block', textAlign: 'center' })">A</span>
            </div>
          </div>
        </template>

        <div :class="css({ fontWeight: 600 })">Swatches</div>
        <div v-bind="api.swatchGroupProps" :class="colorPickerClasses.swatchGroup">
          <template v-for="preset in presets">
            <button v-bind="api.getSwatchTriggerProps({ value: preset })">
              <div v-bind="api.getTransparencyGridProps()" :class="colorPickerClasses.transparencyGrid" />
              <div v-bind="api.getSwatchProps({ value: preset })" :class="colorPickerClasses.swatch" />
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>