<script setup>
import { useId } from '@/hooks/useId'
import { css } from '@/styled-system/css'
import { checkbox } from '@/styled-system/recipes'
import * as zagCheckbox from '@zag-js/checkbox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Check } from 'lucide-vue-next'
import { computed } from 'vue'

const styles = checkbox()

const [state, send] = useMachine(zagCheckbox.machine({ id: useId('checkbox') }))
const api = computed(() =>
	zagCheckbox.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <label v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getControlProps()" :class="styles.control">
      <span v-if="api.checked">
        <Check :class="css({ w: 4, h: 4, color: 'gray.900' })" />
      </span>
    </div>
    <input v-bind="api.getHiddenInputProps()" />
    <span v-bind="api.getLabelProps()" :class="styles.label">
      <span v-if="api.checked"> Checked</span>
      <span v-else> Unchecked</span>
    </span>
  </label>
</template>