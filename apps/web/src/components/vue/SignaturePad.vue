<script setup lang="ts">
import * as zagSignaturePad from '@zag-js/signature-pad'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Eraser } from 'lucide-vue-next'
import { computed, useId } from 'vue'
import { signaturePad } from '@/styled-system/recipes'

const styles = signaturePad()

const service = useMachine(zagSignaturePad.machine, { id: useId() })
const api = computed(() => zagSignaturePad.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getControlProps()" :class="styles.control">
			<svg v-bind="api.getSegmentProps()">
				<title>Signature Pad</title>
				<path
					v-for="(path, i) in api.paths"
					:key="i"
					v-bind="api.getSegmentPathProps({ path })"
				/>
				<path
					v-if="api.currentPath"
					v-bind="api.getSegmentPathProps({ path: api.currentPath })"
				/>
			</svg>
			<button
				type="button"
				v-bind="api.getClearTriggerProps()"
				:class="styles.clearTrigger"
			>
				<Eraser :size="16" />
			</button>
			<div v-bind="api.getGuideProps()" :class="styles.guide" />
		</div>
	</div>
</template>
