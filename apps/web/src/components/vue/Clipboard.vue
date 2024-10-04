<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { clipboard } from '@/styled-system/recipes'
import * as zagClipboard from '@zag-js/clipboard'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ClipboardCheck, ClipboardCopyIcon } from 'lucide-vue-next'
import { computed } from 'vue'

const styles = clipboard()

const [state, send] = useMachine(
	zagClipboard.machine({
		id: useId('clipboard'),
		value: 'https://github.com/dangvanthanh/paga-ui',
	}),
)

const api = computed(() =>
	zagClipboard.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-bind="api.getControlProps()" :class="styles.control">
      <input v-bind="api.getInputProps()" :class="styles.input" />
      <button v-bind="api.getTriggerProps()" :class="styles.trigger">
        <ClipboardCheck v-if="api.copied" />
        <ClipboardCopyIcon v-else />
      </button>
    </div>
  </div>
</template>
