<script setup>
import * as zagClipboard from '@zag-js/clipboard'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ClipboardCheck, ClipboardCopyIcon } from 'lucide-vue-next'
import { computed } from 'vue'
import { clipboard } from '@/styled-system/recipes'

const styles = clipboard()

const [state, send] = useMachine(
  zagClipboard.machine({
    id: '1',
    value: 'https://github.com/dangvanthanh/paga-ui',
  }),
)

const api = computed(() =>
  zagClipboard.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.rootProps">
    <div v-bind="api.controlProps" :class="styles.control">
      <input v-bind="api.inputProps" :class="styles.input" />
      <button v-bind="api.triggerProps" :class="styles.trigger">
        <ClipboardCheck v-if="api.isCopied" />
        <ClipboardCopyIcon v-else />
      </button>
    </div>
  </div>
</template>
