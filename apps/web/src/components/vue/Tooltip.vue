<script setup>
import { useId } from '@/hooks/useId'
import { tooltip } from '@/styled-system/recipes'
import * as zagTooltip from '@zag-js/tooltip'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const styles = tooltip()
const [state, send] = useMachine(zagTooltip.machine({ id: useId('tooltip') }))
const api = computed(() =>
	zagTooltip.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div :class="styles.root">
    <button ref="ref" v-bind="api.triggerProps" :class="styles.trigger">Hover Me</button>
    <div v-if="api.open" v-bind="api.positionerProps" :class="styles.content">
      <div v-bind="api.contentProps">Tooltip</div>
    </div>
  </div>
</template>