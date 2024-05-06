<script setup>
import { useId } from '@/hooks/useId'
import { pagination } from '@/styled-system/recipes'
import * as zagPagination from '@zag-js/pagination'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
	count: Number,
	pageSize: Number,
})

const styles = pagination()
const id = useId('pagination')

const [state, send] = useMachine(
	zagPagination.machine({ id, count: props.count || 5 }),
)

const api = computed(() =>
	zagPagination.connect(state.value, send, normalizeProps),
)

api.value.setPageSize(props.pageSize || 1)
</script>

<template>
  <nav v-if="api.totalPages > 1" v-bind="api.rootProps" :class="styles.root">
    <a href="#previous" v-bind="api.prevTriggerProps" :class="styles.prevTrigger">
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
    <a href="#next" v-bind="api.nextTriggerProps" :class="styles.nextTrigger">
      <ChevronRight />
    </a>
  </nav>
</template>