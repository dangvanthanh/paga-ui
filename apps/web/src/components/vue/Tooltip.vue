<script setup lang="ts">
import { tooltip } from '@/styled-system/recipes'
import * as zagTooltip from '@zag-js/tooltip'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = tooltip()

const service = useMachine(zagTooltip.machine, { id: useId() })
const api = computed(() => zagTooltip.connect(service, normalizeProps))
</script>

<template>
	<div :class="styles.root">
		<button ref="ref" v-bind="api.getTriggerProps()" :class="styles.trigger">Hover Me</button>
		<div v-if="api.open" v-bind="api.getPositionerProps()" :class="styles.content">
			<div v-bind="api.getContentProps()">Tooltip</div>
		</div>
	</div>
</template>