<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps(['id'])

const component = defineAsyncComponent(() => import(`../vue/${props.id}.vue`))
</script>

<template>
  <component :is="component" />
</template>
