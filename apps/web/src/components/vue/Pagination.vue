<script setup lang="ts">
import { pagination } from '@/styled-system/recipes'
import * as zagPagination from '@zag-js/pagination'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed, useId } from 'vue'

const props = defineProps({
	count: Number,
	pageSize: Number,
})

const styles = pagination()

const service = useMachine(zagPagination.machine, {
	id: useId(),
	count: props.count || 5,
})
const api = computed(() => zagPagination.connect(service, normalizeProps))

api.value.setPageSize(props.pageSize || 1)
</script>

<template>
	<nav v-if="api.totalPages > 1" v-bind="api.getRootProps()" :class="styles.root">
		<a href="#previous" v-bind="api.getPrevTriggerProps()" :class="styles.prevTrigger">
			<ChevronLeft />
		</a>
		<template v-for="(page, i) in api.pages" :key="page.type === 'page' ? page.value : `ellipsis-${i}`">
			<template v-if="page.type === 'page'">
				<a :href="`#${page.value}`" v-bind="api.getItemProps(page)" :class="styles.item">
					{{ page.value }}
				</a>
			</template>
			<span v-else>
				<span v-bind="api.getEllipsisProps({ index: i })" :class="styles.ellipsis">&#8230;</span>
			</span>
		</template>
		<a href="#next" v-bind="api.getNextTriggerProps()" :class="styles.nextTrigger">
			<ChevronRight />
		</a>
	</nav>
</template>