<script setup lang="ts">
import * as zagPagination from "@zag-js/pagination";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { pagination } from "~/styled-system/recipes";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps<{
  count: number;
  pageSize: number;
}>();

const paginationClasses = pagination();

const [state, send] = useMachine(
  zagPagination.machine({ id: "1", count: props.count })
);

const api = computed(() =>
  zagPagination.connect(state.value, send, normalizeProps)
);

api.value.setPageSize(props.pageSize);
</script>

<template>
  <nav
    v-if="api.totalPages > 1"
    v-bind="api.rootProps"
    :class="paginationClasses.root"
  >
    <a
      href="#previous"
      v-bind="api.prevPageTriggerProps"
      :class="paginationClasses['prev-trigger']"
    >
      <ChevronLeft />
    </a>
    <template
      v-for="(page, i) in api.pages"
      :key="page.type === 'page' ? page.value : `ellipsis-${i}`"
    >
      <template v-if="page.type === 'page'">
        <a
          :href="`#${page.value}`"
          v-bind="api.getPageTriggerProps(page)"
          :class="paginationClasses.item"
        >
          {{ page.value }}
        </a>
      </template>
      <span v-else>
        <span
          v-bind="api.getEllipsisProps({ index: i })"
          :class="paginationClasses.ellipsis"
          >&#8230;</span
        >
      </span>
    </template>
    <a
      href="#next"
      v-bind="api.nextPageTriggerProps"
      :class="paginationClasses['next-trigger']"
    >
      <ChevronRight />
    </a>
  </nav>
</template>