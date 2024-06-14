<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { css } from '@/styled-system/css'
import * as zagQrCode from '@zag-js/qr-code'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const [state, send] = useMachine(
	zagQrCode.machine({
		id: useId('qrcode'),
		value: 'https://github.com/dangvanthanh/paga-ui',
	}),
)

const api = computed(() => zagQrCode.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="css({ w: 32, h: 32 })">
    <svg v-bind="api.getFrameProps()">
      <path v-bind="api.getPatternProps()" />
    </svg>
    <div v-bind="api.getOverlayProps()">
      <img src="https://avatars.githubusercontent.com/u/54212428?s=88&v=4" alt="" />
    </div>
  </div>
</template>