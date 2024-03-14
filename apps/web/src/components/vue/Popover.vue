<script setup>
import * as zagPopover from '@zag-js/popover'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, Teleport } from 'vue'
import { css, cx } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { input, popover } from '@/styled-system/recipes'

const styles = popover()

const [state, send] = useMachine(zagPopover.machine({ id: '1' }))
const api = computed(() =>
	zagPopover.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div>
    <button v-bind="api.triggerProps" :class="styles.trigger">
      Dimensions <span aria-hidden>▾</span>
    </button>
    <Teleport to="body">
      <div v-bind="api.positionerProps" :class="styles.positioner">
        <div v-bind="api.contentProps" :class="styles.content">
          <div v-bind="api.titleProps" :class="styles.title">Dimensions</div>
          <div v-bind="api.descriptionProps" :class="styles.description">
            <div :class="flex({ align: 'center', gap: 2, mt: 2 })">
              <span :class="css({ w: 16 })">Width</span>
              <input value="100%" :class="cx(input({ size: 'sm' }), css({ w: 'full' }))" />
            </div>
            <div :class="flex({ align: 'center', gap: 2, mt: 2 })">
              <span :class="css({ w: 16 })">Height</span>
              <input value="20vh" :class="cx(input({ size: 'sm' }), css({ w: 'full' }))" />
            </div>
            <div :class="flex({ align: 'center', gap: 2, mt: 2 })">
              <span :class="css({ w: 16 })">Margin</span>
              <input value="20px" :class="cx(input({ size: 'sm' }), css({ w: 'full' }))" />
            </div>
            <div :class="flex({ align: 'center', gap: 2, mt: 2 })">
              <span :class="css({ w: 16 })">Pading</span>
              <input value="20px" :class="cx(input({ size: 'sm' }), css({ w: 'full' }))" />
            </div>
          </div>
          <button v-bind="api.closeTriggerProps" :class="styles.closeTrigger">
            <small>&#x2715;</small>
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>