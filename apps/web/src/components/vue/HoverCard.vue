<script setup lang="ts">
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { hoverCard } from '@/styled-system/recipes'
import * as zagHoverCard from '@zag-js/hover-card'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'
import Avatar from './Avatar.vue'

const styles = hoverCard()

const service = useMachine(zagHoverCard.machine, { id: useId() })
const api = computed(() => zagHoverCard.connect(service, normalizeProps))
</script>

<template>
	<a href="https://twitter.com/dangvanthanh" target="_blank" v-bind="api.getTriggerProps()" :class="styles.trigger">
		@dangvanthanh
	</a>
	<Teleport to="body" v-if="api.open">
		<div v-bind="api.getPositionerProps()">
			<div v-bind="api.getContentProps()" :class="styles.content">
				<div v-bind="api.getArrowProps()" :class="styles.arrow">
					<div v-bind="api.getArrowTipProps()"></div>
				</div>
				<div :class="flex({ align: 'flex-start', gap: 3 })">
					<div :class="css({ mt: 1 })">
						<Avatar id="DT" fallback="DT" />
					</div>
					<div :class="css({ flex: '1 1 0%' })">
						<div :class="css({ color: 'gray.900', fontWeight: 600, mb: 1 })">Dang Van Thanh</div>
						<div :class="css({ color: 'gray.600' })">Front-end Enginner</div>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>