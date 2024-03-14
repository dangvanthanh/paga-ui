<script setup>
import * as zagTooltip from '@zag-js/tooltip'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { tooltip } from '@/styled-system/recipes'

const styles = tooltip()

const [state, send] = useMachine(zagTooltip.machine({ id: '1' }))
const api = computed(() =>
	zagTooltip.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div>
    <button ref="ref" v-bind="api.triggerProps" :class="styles.trigger">Hover Me</button>
    <div v-if="api.isOpen" v-bind="api.positionerProps" :class="styles.content">
      <div v-bind="api.contentProps">Tooltip</div>
    </div>
  </div>
</template>