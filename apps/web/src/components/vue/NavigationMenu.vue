<script setup lang="ts">
import * as navigationMenu from '@zag-js/navigation-menu'
import { useMachine, normalizeProps } from '@zag-js/vue'
import { computed } from 'vue'

const service = useMachine(navigationMenu.machine, { id: 'nav' })
const api = computed(() => navigationMenu.connect(service, normalizeProps))
</script>

<template>
	<nav v-bind="api.getRootProps()">
		<ul v-bind="api.getListProps()">

			<li v-bind="api.getItemProps({ value: 'products' })">
				<button v-bind="api.getTriggerProps({ value: 'products' })">
					Products
				</button>
				<div v-bind="api.getContentProps({ value: 'products' })">
					<a v-bind="api.getLinkProps({ value: 'products' })" href="#">
						Analytics
					</a>
					<a v-bind="api.getLinkProps({ value: 'products' })" href="#">
						Marketing
					</a>
				</div>
			</li>


			<li v-bind="api.getItemProps({ value: 'pricing' })">
				<a v-bind="api.getLinkProps({ value: 'pricing' })" href="#">
					Pricing
				</a>
			</li>
		</ul>
	</nav>
</template>
