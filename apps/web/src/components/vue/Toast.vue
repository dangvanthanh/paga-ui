<script setup lang="ts">
import { flex } from '@/styled-system/patterns'
import { button } from '@/styled-system/recipes'
import * as zagToast from '@zag-js/toast'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { useId } from 'vue'
import AnimateToast from './AnimateToast.vue'

const toaster = zagToast.createStore({
	placement: 'top-end',
	overlap: true,
})

const service = useMachine(zagToast.group.machine, {
	id: useId(),
	store: toaster,
})
const api = zagToast.group.connect(service, normalizeProps)

const topRightToast = () => toaster.create({ title: 'Hello' })

const bottomRightToast = () =>
	toaster.create({ title: 'Data submitted!', type: 'success' })
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
    <div v-bind="api.getGroupProps()">
    <AnimateToast
      v-for="(toast, index) in api.getToasts()"
      :key="toast.id"
      :toast="toast"
      :index="index"
      :parent="service"
    />
  </div>
  </Teleport>
</template>
