<script setup lang="ts">
import { css, cx } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { input, popover } from '@/styled-system/recipes'
import * as zagPopover from '@zag-js/popover'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Teleport, computed, useId } from 'vue'

const styles = popover()

const [state, send] = useMachine(zagPopover.machine({ id: useId() }))

const api = computed(() =>
  zagPopover.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div>
    <button v-bind="api.getTriggerProps()" :class="styles.trigger">
      Dimensions <span aria-hidden>▾</span>
    </button>
    <Teleport to="body" :disabled="!api.portalled">
      <div v-bind="api.getPositionerProps()" :class="styles.positioner">
        <div v-bind="api.getContentProps()" :class="styles.content">
          <div v-bind="api.getTitleProps()" :class="styles.title">Dimensions</div>
          <div v-bind="api.getDescriptionProps()" :class="styles.description">
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
          <button v-bind="api.getCloseTriggerProps()" :class="styles.closeTrigger">
            <small>&#x2715;</small>
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>