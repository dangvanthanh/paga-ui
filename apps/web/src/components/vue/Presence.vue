<script setup lang="ts">
import { css } from '@/styled-system/css'
import { ref } from 'vue'
import AnimatePresence from './AnimatePresence.vue'

const open = ref(true)
const unmouted = ref(false)

const handleOpen = () => {
	open.value = !open.value
}
</script>

<template>
  <button type="button" @click="handleOpen" :class="css({ fontSize: 'sm' })">Toggle</button>
  <AnimatePresence :present="open" unmountOnExit @exit-complete="unmouted = true">
    <div>Content</div>
  </AnimatePresence>
</template>