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
const id = useId('avatar')

const [state, send] = useMachine(zagAvatar.machine({ id }))

const api = computed(() => zagAvatar.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.rootProps" v-bind:class="styles.root">
    <span v-bind="api.fallbackProps" v-bind:class="styles.fallback">{{
      props.fallback || 'PG'
    }}</span>
    <img v-bind:alt="props.fallback" v-bind:src="props.src" v-bind="api.imageProps" v-bind:class="styles.image" />
  </div>
</template>