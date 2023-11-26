import * as zagColorPicker from "@zag-js/color-picker"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, ref } from "vue"
import { css, cx } from '~/styled-system/css'
import { flex } from '~/styled-system/patterns'
import { colorPicker } from '~/styled-system/recipes'
const colorPickerClasses = colorPicker()

export default defineComponent({
  name: "ColorPicker",
  setup() {
    const [state, send] = useMachine(zagColorPicker.machine({
      id: "2",
      value: zagColorPicker.parse("hsl(0, 100%, 50%)")
    }))

    const apiRef = computed(() => zagColorPicker.connect(state.value, send, normalizeProps));

    const presets = ref(["#ff0000", "#00ff00", "#0000ff"]);

    return () => {
      const api = apiRef.value

      return (
        <div {...api.rootProps} class={colorPickerClasses.root}>
          <label {...api.labelProps}>Select Color: {api.valueAsString}</label>
          <input {...api.hiddenInputProps} />
          <div {...api.controlProps} class={colorPickerClasses.control}>
            <button {...api.triggerProps} class={colorPickerClasses.trigger}>
              <div {...api.getTransparencyGridProps({ size: '10px' })} class={colorPickerClasses.transparencyGrid} />
              <div {...api.getSwatchProps({ value: api.value })} class={colorPickerClasses.swatch} />
            </button>
            <input {...api.getChannelInputProps({ channel: 'hex' })} class={colorPickerClasses.input} />
            <input {...api.getChannelInputProps({ channel: 'alpha' })} class={colorPickerClasses.input} />
          </div>

          <div {...api.positionerProps}>
            <div {...api.contentProps} class={colorPickerClasses.content}>
              <div {...api.getAreaProps()} class={colorPickerClasses.area}>
                <div {...api.getAreaBackgroundProps()} class={colorPickerClasses.areaBackground} />
                <div {...api.getAreaThumbProps()} />
              </div>

              <div {...api.getChannelSliderProps({ channel: 'hue' })} class={colorPickerClasses.channelSlider}>
                <div {...api.getChannelSliderTrackProps({ channel: 'hue' })} class={colorPickerClasses.channelSliderTrack} />
                <div {...api.getChannelSliderThumbProps({ channel: 'hue' })} class={colorPickerClasses.channelSliderThumb} />
              </div>

              <div {...api.getChannelSliderProps({ channel: 'alpha' })} class={colorPickerClasses.channelSlider}>
                <div {...api.getTransparencyGridProps({ size: '12px' })} />
                <div {...api.getChannelSliderTrackProps({ channel: 'alpha' })} class={colorPickerClasses.channelSliderTrack} />
                <div {...api.getChannelSliderThumbProps({ channel: 'alpha' })} class={colorPickerClasses.channelSliderThumb} />
              </div>

              <div {...api.swatchGroupProps} class={colorPickerClasses.swatchGroup}>
                {presets.value.map((preset) => (
                  <button {...api.getSwatchTriggerProps({ value: preset })}>
                    <div {...api.getTransparencyGridProps({ size: '4px' })} class={colorPickerClasses.transparencyGrid} />
                    <div {...api.getSwatchProps({ value: preset })} class={colorPickerClasses.swatch} />
                  </button>
                ))}
              </div>

              {api.format === 'rgba' && (
                <div class={flex({ gap: 1 })}>   
                  <div class={flex({ direction: 'column', gap: 1 })}>
                    <input {...api.getChannelInputProps({ channel: 'red' })} class={cx(colorPickerClasses.input, css({ textAlign: 'center' }))} />
                    <span class={css({ display: 'block', textAlign: 'center' })}>R</span>
                  </div>

                  <div class={flex({ direction: 'column', gap: 1 })}>
                    <input {...api.getChannelInputProps({ channel: 'green' })} class={cx(colorPickerClasses.input, css({ textAlign: 'center' }))} />
                    <span class={css({ display: 'block', textAlign: 'center' })}>G</span>
                  </div>

                  <div class={flex({ direction: 'column', gap: 1 })}>
                    <input {...api.getChannelInputProps({ channel: 'blue' })} class={cx(colorPickerClasses.input, css({ textAlign: 'center' }))} />
                    <span class={css({ display: 'block', textAlign: 'center' })}>B</span>
                  </div>
                    
                  <div class={flex({ direction: 'column', gap: 1 })}>

                    <input {...api.getChannelInputProps({ channel: 'alpha' })} class={cx(colorPickerClasses.input, css({ textAlign: 'center' }))} />
                    <span class={css({ display: 'block', textAlign: 'center' })}>A</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  }
})