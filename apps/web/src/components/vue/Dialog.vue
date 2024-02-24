<script setup>
import * as zagDialog from '@zag-js/dialog'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, Teleport } from 'vue'
import { css, cx } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { button, input, dialog } from '@/styled-system/recipes'

const styles = dialog()

const [state, send] = useMachine(zagDialog.machine({ id: '1' }))
const api = computed(() => zagDialog.connect(state.value, send, normalizeProps))
</script>

<template>
  <div>
    <button v-bind="api.triggerProps" :class="css({ textStyle: 'sm' })">Open Dialog</button>
    <Teleport to="body">
      <div v-if="api.isOpen" :class="styles.root">
        <div v-bind="api.backdropProps" :class="styles.backdrop" />
        <div v-bind="api.positionerProps">
          <div v-bind="api.contentProps" :class="styles.content">
            <h2 v-bind="api.titleProps" :class="styles.title">Edit profile</h2>
            <p v-bind="api.descriptionProps" :class="styles.description">
              Make changes to your profile here. Click save when you are done.
            </p>
            <div :class="css({ my: 6 })">
              <input placeholder="Enter name..." :class="cx(css({ w: 'full' }), input({ size: 'sm' }))" />
            </div>
            <div :class="flex({ justify: 'end', gap: 2 })">
              <button :class="button({ variant: 'ghost' })" v-bind="api.closeTriggerProps">Cancel</button>
              <button :class="button()">Save</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>