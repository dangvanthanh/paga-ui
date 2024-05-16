<script setup>
import { useId } from '@/hooks/useId'
import { avatar } from '@/styled-system/recipes'
import * as zagAvatar from '@zag-js/avatar'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const props = defineProps({
	fallback: String,
	src: String,
})

const styles = avatar()

const [state, send] = useMachine(zagAvatar.machine({ id: useId('avatar') }))

const api = computed(() => zagAvatar.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <span v-bind="api.fallbackProps" :class="styles.fallback">
      {{ props.fallback || 'PG' }}
    </span>
    <img :alt="props.fallback" :src="props.src" v-bind="api.imageProps" :class="styles.image" />
  </div>
</template>