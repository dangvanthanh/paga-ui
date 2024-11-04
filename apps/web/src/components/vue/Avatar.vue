<script setup lang="ts">
import { avatar } from '@/styled-system/recipes'
import * as zagAvatar from '@zag-js/avatar'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const props = defineProps({
	fallback: String,
	src: String,
})

const styles = avatar()

const [state, send] = useMachine(zagAvatar.machine({ id: useId() }))

const api = computed(() => zagAvatar.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <span v-bind="api.getFallbackProps()" :class="styles.fallback">
      {{ props.fallback || 'PG' }}
    </span>
    <img :alt="props.fallback" :src="props.src" v-bind="api.getImageProps()" :class="styles.image" />
  </div>
</template>