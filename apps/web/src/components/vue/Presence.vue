<script setup lang="ts">
import { css } from '@/styled-system/css'
import { ref } from 'vue'
import AnimatePresence from './AnimatePresence.vue'

const open = ref(true)
const unmouted = ref(false)
</script>

<template>
  <button type="button" @click="open = !open" :class="css({ fontSize: 'sm' })">Toggle</button>
  <AnimatePresence :present="open" unmountOnExit @exit-complete="unmouted = true">
    <div>Content</div>
  </AnimatePresence>
</template>