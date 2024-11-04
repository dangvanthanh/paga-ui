<script setup lang="ts">
import { signaturePad } from '@/styled-system/recipes'
import * as zagSignaturePad from '@zag-js/signature-pad'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = signaturePad()

const [state, send] = useMachine(zagSignaturePad.machine({ id: useId() }))

const api = computed(() =>
	zagSignaturePad.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getControlProps()" :class="styles.control">
      <svg v-bind="api.getSegmentProps()">
        <path v-for="(path, i) of api.paths" :key="i" v-bind="api.getSegmentPathProps({ path })" />
        <path v-if="api.currentPath" v-bind="api.getSegmentPathProps({ path: api.currentPath })" />
      </svg>
      <button v-bind="api.getClearTriggerProps()" :class="styles.clearTrigger">&times;</button>
      <div v-bind="api.getGuideProps()" :class="styles.guide" />
    </div>
  </div>
</template>