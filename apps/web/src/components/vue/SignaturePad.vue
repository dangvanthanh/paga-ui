<script setup>
import * as zagSignaturePad from '@zag-js/signature-pad'
import { useMachine, normalizeProps } from '@zag-js/vue'
import { computed } from 'vue'
import { signaturePad } from '@/styled-system/recipes'

const styles = signaturePad()

const [state, send] = useMachine(zagSignaturePad.machine({ id: '1' }))

const api = computed(() =>
  zagSignaturePad.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <div v-bind="api.controlProps" :class="styles.control">
      <svg v-bind="api.segmentProps">
        <path v-for="(path, i) of api.paths" :key="i" v-bind="api.getSegmentPathProps({ path })" />
        <path v-if="api.currentPath" v-bind="api.getSegmentPathProps({ path: api.currentPath })" />
      </svg>
      <button v-bind="api.clearTriggerProps" :class="styles.clearTrigger">&times;</button>
      <div v-bind="api.guideProps" :class="styles.guide" />
    </div>
  </div>
</template>
