<script setup lang="ts">
import { progressCircular } from '@/styled-system/recipes'
import * as zagProgress from '@zag-js/progress'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = progressCircular()

const service = useMachine(zagProgress.machine, { id: useId(), value: 50 })
const api = computed(() => zagProgress.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<svg v-bind="api.getCircleProps()" :class="styles.circle">
			<circle v-bind="api.getCircleTrackProps()" :class="styles.circleTrack" />
			<circle v-bind="api.getCircleRangeProps()" :class="styles.circleRange" />
		</svg>
	</div>
</template>