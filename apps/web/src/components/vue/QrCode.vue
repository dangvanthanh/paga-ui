<script setup lang="ts">
import { qrCode } from '@/styled-system/recipes'
import * as zagQrCode from '@zag-js/qr-code'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = qrCode()

const [state, send] = useMachine(
	zagQrCode.machine({
		id: useId(),
		value: 'https://github.com/dangvanthanh/paga-ui',
	}),
)
const api = computed(() => zagQrCode.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <svg v-bind="api.getFrameProps()" :class="styles.frame">
      <path v-bind="api.getPatternProps()" />
    </svg>
    <div v-bind="api.getOverlayProps()" :class="styles.overlay">
      <img src="https://avatars.githubusercontent.com/u/54212428?s=88&v=4" alt="" />
    </div>
  </div>
</template>