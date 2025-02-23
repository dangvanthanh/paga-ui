<script setup lang="ts">
import { fileUpload } from '@/styled-system/recipes'
import * as zagFileUpload from '@zag-js/file-upload'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, ref, useId } from 'vue'
import { humanFileSize } from '@/lib'

const styles = fileUpload()

const src = ref()

const service = useMachine(zagFileUpload.machine, {
	id: useId(),
	accept: 'image/*',
	onFileChange(details) {
		const reader = new FileReader()
		reader.onload = (event) => {
			const image = event.target?.result
			src.value = image
		}
		reader.readAsDataURL(details.acceptedFiles[0])
	},
})
const api = computed(() => zagFileUpload.connect(service, normalizeProps))
</script>

<template>
	<div v-bind="api.getRootProps()" :class="styles.root">
		<div v-bind="api.getDropzoneProps()" :class="styles.dropzone">
			<input v-bind="api.getHiddenInputProps()" />
			<span :class="styles.label">Drag and drop, or&nbsp;</span>
			<button v-bind="api.getTriggerProps()" :class="styles.trigger">click to select</button>
		</div>

		<ul v-bind="api.getItemGroupProps()">
			<li v-for="file in api.acceptedFiles" :key="file.name" v-bind="api.getItemProps({ file })" :class="styles.item">
				<img :src="src" alt="" :class="styles.itemPreview" />
				<div v-bind="api.getItemNameProps({ file })" :class="styles.itemName">
					<span>{{ file.name }}</span>
					<span>{{ humanFileSize(file.size, true) }}</span>
				</div>
				<button v-bind="api.getItemDeleteTriggerProps({ file })">
					<small>&#x2715;</small>
				</button>
			</li>
		</ul>
	</div>
</template>