<script setup lang="ts">
import * as zagDialog from '@zag-js/dialog';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed, Teleport } from 'vue';
import { css, cx } from '~/styled-system/css';
import { flex } from '~/styled-system/patterns';
import { button, input, dialog } from '~/styled-system/recipes';

const dialogClasses = dialog();

const [state, send] = useMachine(zagDialog.machine({ id: '1' }));
const api = computed(() => zagDialog.connect(state.value, send, normalizeProps));
</script>

<template>
  <div>
    <button v-bind="api.triggerProps" :class="css({ textStyle: 'sm' })">Open Dialog</button>
    <Teleport to="body">
      <div v-if="api.isOpen" :class="dialogClasses.root">
        <div v-bind="api.backdropProps" :class="dialogClasses.backdrop" />
        <div v-bind="api.positionerProps">
          <div v-bind="api.contentProps" :class="dialogClasses.content">
            <h2 v-bind="api.titleProps" :class="dialogClasses.title">Edit profile</h2>
            <p v-bind="api.descriptionProps" :class="dialogClasses.description">
              Make changes to your profile here. Click save when you are done.
            </p>
            <button v-bind="api.closeTriggerProps" :class="dialogClasses.closeTrigger">
              <small>&#x2715;</small>
            </button>
            <div :class="css({ my: 3 })">
              <input placeholder="Enter name..." :class="cx(css({ w: 'full' }), input({ size: 'sm' }))" />
            </div>
            <div :class="flex({ justify: 'end' })">
              <button :class="button()">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>