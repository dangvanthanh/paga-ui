<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const { id } = defineProps<{ id: string }>()

const component = defineAsyncComponent(() => import(`../vue/${id}.vue`))
</script>

<template>
	<component :is="component"/>
</template>
