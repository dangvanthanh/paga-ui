<script setup lang="ts">
import { css } from '@/styled-system/css'
import { ref } from 'vue'
import Presence from './Presence.vue'

const open = ref(true)
</script>

<template>
  <button type="button" @click="handleToggle" :class="css({ fontSize: 'sm' })">Toggle</button>
  <Presence :present="open" unmountOnExit>
    <div>Content</div>
  </Presence>
</template>