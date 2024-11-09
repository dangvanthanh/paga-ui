<script setup lang="ts">
import { flex } from '@/styled-system/patterns'
import { button } from '@/styled-system/recipes'
import * as zagToast from '@zag-js/toast'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Teleport, useId } from 'vue'
import AnimateToast from './AnimateToast.vue'

const [state, send] = useMachine(
	zagToast.group.machine({ id: useId(), placement: 'bottom-end', gap: 24 }),
)

const api = zagToast.group.connect(state.value, send, normalizeProps)

const topRightToast = () =>
	api.create({
		title: 'Hello World',
		description: 'This is a toast',
	})

const bottomRightToast = () => {
	api.create({
		title: 'Data submitted!',
		description: 'Thank you for your submission',
	})
}

bottomRightToast()
</script>

<template>
  <div :class="flex({ gap: 2 })">
    <button @click="topRightToast" :class="button()">
      Show Top Right Toast
    </button>
    <button @click="bottomRightToast" :class="button()">
      Show Bottom Right toast
    </button>
  </div>
  <Teleport to="body">
    <div v-for="placement in api.getPlacements()">
      <div :key="placement" v-bind="api.getGroupProps({ placement })">
        <AnimateToast v-for="toast in api.getToastsByPlacement(placement)" :key="toast.id" :actor="toast" />
      </div>
    </div>
  </Teleport>
</template>
