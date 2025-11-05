<script setup lang="ts">
import { passwordInput } from '@/styled-system/recipes'
import * as zagPasswordInput from '@zag-js/password-input'
import { useMachine, normalizeProps } from '@zag-js/vue'
import { computed, useId } from 'vue'
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'

const styles = passwordInput()

const service = useMachine(zagPasswordInput.machine, { id: useId() })

const api = computed(() => zagPasswordInput.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<label v-bind="api.getLabelProps()" :class="styles.label">Password</label>
		<div v-bind="api.getControlProps()" :class="styles.control">
			<input v-bind="api.getInputProps()" :class="styles.input">
			<button
				v-bind="api.getVisibilityTriggerProps()"
				:class="styles.visibilityTrigger"
			>
				<span v-bind="api.getIndicatorProps()">
					<EyeIcon v-if="api.visible"/>
					<EyeOffIcon v-else/>
				</span>
			</button>
		</div>
	</div>
</template>
