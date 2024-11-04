<script setup lang="ts">
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import * as zagDatepicker from '@zag-js/date-picker'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { computed, useId } from 'vue'

const [state, send] = useMachine(
	zagDatepicker.machine({
		id: useId(),
		view: 'day',
	}),
)

const api = computed(() =>
	zagDatepicker.connect(state.value, send, normalizeProps),
)
</script>


<template>
  <div :class="css({ pos: 'relative' })">
    <div v-bind="api.getControlProps()"
      :class="flex({ borderWidth: 1, borderColor: 'slate.300', px: 2, py: 1.5, rounded: 'xs' })">
      <input v-bind="api.getInputProps()" :class="css({ w: 'full', px: 2, outline: 'none' })" />
      <button v-bind="api.getTriggerProps()">🗓</button>
    </div>
    <Teleport to="body">
      <div v-bind="api.getPositionerProps()">
        <div v-bind="api.getContentProps()"
          :class="css({ bg: 'white', shadow: 'xs', zIndex: 100, p: 2, borderWidth: 1, borderColor: 'slate.300', px: 2, py: 1.5, rounded: 'xs' })">
          <div v-show="api.view === 'day'">
            <div v-bind="api.getViewControlProps({ view: 'year' })"
              :class="flex({ align: 'center', justify: 'space-between', mb: 2, gap: 6 })">
              <button v-bind="api.getPrevTriggerProps()" :class="css({ p: 2 })">
                <ChevronLeftIcon :size="16" />
              </button>
              <button v-bind="api.getViewTriggerProps()">
                {{ api.visibleRangeText.start }}
              </button>
              <button v-bind="api.getNextTriggerProps()" :class="css({ p: 2 })">
                <ChevronRightIcon :size="16" />
              </button>
            </div>
            <table v-bind="api.getTableProps({ view: 'day' })">
              <thead v-bind="api.getTableHeaderProps({ view: 'day' })">
                <tr v-bind="api.getTableRowProps({ view: 'day' })">
                  <template v-for="(day) in api.weekDays">
                    <th scope="col" :aria-label="day.long">
                      {{ day.narrow }}
                    </th>
                  </template>
                </tr>
              </thead>
              <tbody v-bind="api.getTableBodyProps({ view: 'day' })">
                <template v-for="(week) in api.weeks">
                  <tr v-bind="api.getTableRowProps({ view: 'day' })">
                    <template v-for="(value) in week">
                      <td v-bind="api.getDayTableCellProps({ value })">
                        <div v-bind="api.getDayTableCellTriggerProps({ value })"
                          :class="css({ p: 2, rounded: 'xs', textAlign: 'center', _hover: { bg: 'gray.100' }, '&[data-disabled]': { visibility: 'hidden' } })">
                          {{ value.day }}
                        </div>
                      </td>
                    </template>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>