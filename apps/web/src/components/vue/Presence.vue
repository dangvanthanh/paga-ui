<script setup lang="ts">
import { ref } from 'vue'
import { css, cx } from '@/styled-system/css'
import { button } from '@/styled-system/recipes'
import AnimatePresence from './AnimatePresence.vue'

const open = ref(true)
const unmouted = ref(false)

const handleOpen = () => {
	open.value = !open.value
}
</script>

<template>
	<div>
		<button
			type="button"
			@click="handleOpen"
			:class="cx(button({ variant: 'ghost', size: 'sm' }), css({ mb: 4 }))"
		>
			Toggle
		</button>
		<div :class="css({ w: 'full' })">
			<AnimatePresence
				:present="open"
				unmountOnExit
				@exit-complete="unmouted = true"
			>
				<div
					:class="css({ fontSize: 'sm', borderWidth: 1, borderColor: 'gray.200', p: 2 })"
				>
					Content
				</div>
			</AnimatePresence>
		</div>
	</div>
</template>
