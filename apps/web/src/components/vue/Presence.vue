<script setup lang="ts">
import * as zagPresence from '@zag-js/presence'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, ref, watch } from 'vue'

const { present, unmountOnExit } = defineProps<{
	present?: boolean
	unmountOnExit?: boolean
}>()
const emit = defineEmits<(e: 'exit-complete') => void>()

const [state, send] = useMachine(zagPresence.machine({ present }))

const api = computed(() =>
	zagPresence.connect(state.value, send, normalizeProps),
)

const nodeRef = ref<HTMLElement | null>(null)

watch(nodeRef, () => {
	api.value.setNode(nodeRef.value)
})

const unmount = computed(() => !api.value.present && unmountOnExit)
</script>

<template>
  <div v-show="!unmount" :hidden="!api.present" :data-state="api.skip ? undefined : present ? 'open' : 'closed'"
    ref="nodeRef" v-bind="$attrs" />
</template>
