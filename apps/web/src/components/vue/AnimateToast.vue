<script setup lang="ts">
import * as zagToast from '@zag-js/toast'
import { normalizeProps, useActor } from '@zag-js/vue'
import { computed } from 'vue'

const props = defineProps<{ actor: zagToast.Service<unknown> }>()

const [state, send] = useActor(props.actor)
const api = computed(() => zagToast.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()">
    <h3 v-bind="api.getTitleProps()">{{ api.title }}</h3>
    <p v-bind="api.getDescriptionProps()">{{ api.description }}</p>
    <button @click="api.dismiss()">Close</button>
  </div>
</template>
