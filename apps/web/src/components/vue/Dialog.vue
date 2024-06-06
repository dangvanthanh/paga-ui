<script setup>
import { useId } from '@/hooks/useId'
import { css, cx } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { button, dialog, input } from '@/styled-system/recipes'
import * as zagDialog from '@zag-js/dialog'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Teleport, computed } from 'vue'

const styles = dialog()
const [state, send] = useMachine(zagDialog.machine({ id: useId('dialog') }))
const api = computed(() => zagDialog.connect(state.value, send, normalizeProps))
</script>

<template>
  <div>
    <button v-bind="api.getTriggerProps()" :class="css({ textStyle: 'sm' })">Open Dialog</button>
    <Teleport to="body">
      <div v-if="api.open" :class="styles.root">
        <div v-bind="api.getBackdropProps()" :class="styles.backdrop" />
        <div v-bind="api.getPositionerProps()">
          <div v-bind="api.getContentProps()" :class="styles.content">
            <h2 v-bind="api.getTitleProps()" :class="styles.title">Edit profile</h2>
            <p v-bind="api.getDescriptionProps()" :class="styles.description">
              Make changes to your profile here. Click save when you are done.
            </p>
            <div :class="css({ my: 6 })">
              <input placeholder="Enter name..." :class="cx(css({ w: 'full' }), input({ size: 'sm' }))" />
            </div>
            <div :class="flex({ justify: 'end', gap: 2 })">
              <button :class="button({ variant: 'ghost' })" v-bind="api.getCloseTriggerProps()">Cancel</button>
              <button :class="button()">Save</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>