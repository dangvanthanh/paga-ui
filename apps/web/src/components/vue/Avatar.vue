<script setup lang="ts">
import * as zagAvatar from '@zag-js/avatar'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'
import { avatar } from '@/styled-system/recipes'

const props = defineProps({
	fallback: String,
	src: String,
})

const styles = avatar()

const service = useMachine(zagAvatar.machine, { id: useId() })
const api = computed(() => zagAvatar.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<span v-bind="api.getFallbackProps()" :class="styles.fallback">
			{{ props.fallback || 'PG' }}
		</span>
		<img
			alt="PG"
			:src="props.src"
			v-bind="api.getImageProps()"
			:class="styles.image"
		>
	</div>
</template>
