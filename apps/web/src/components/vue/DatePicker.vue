<script setup lang="ts">
import { useId } from '@/hooks/useId'
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import * as zagDatepicker from '@zag-js/date-picker'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { computed } from 'vue'

const [stateDatepicker, sendDatepicker] = useMachine(
  zagDatepicker.machine({
    id: useId('datepicker'),
    view: 'day',
  }),
)
const apiDatepicker = computed(() =>
  zagDatepicker.connect(stateDatepicker.value, sendDatepicker, normalizeProps),
)
</script>


<template>
  <div :class="css({ pos: 'relative' })">
    <div v-bind="apiDatepicker.getControlProps()"
      :class="flex({ borderWidth: 1, borderColor: 'slate.300', px: 2, py: 1.5, rounded: 'xs' })">
      <input v-bind="apiDatepicker.getInputProps()" :class="css({ w: 'full', px: 2 })" />
      <button v-bind="apiDatepicker.getTriggerProps()">🗓</button>
    </div>
    <Teleport to="body">
      <div v-bind="apiDatepicker.getPositionerProps()">
        <div v-bind="apiDatepicker.getContentProps()"
          :class="css({ bg: 'white', shadow: 'xs', zIndex: 100, p: 2, borderWidth: 1, borderColor: 'slate.300', px: 2, py: 1.5, rounded: 'xs' })">
          <div v-show="apiDatepicker.view === 'day'">
            <div v-bind="apiDatepicker.getViewControlProps({ view: 'year' })"
              :class="flex({ align: 'center', justify: 'space-between', mb: 2, gap: 6 })">
              <button v-bind="apiDatepicker.getPrevTriggerProps()" :class="css({ p: 2 })">
                <ChevronLeftIcon :size="16" />
              </button>
              <button v-bind="apiDatepicker.getViewTriggerProps()">
                {{ apiDatepicker.visibleRangeText.start }}
              </button>
              <button v-bind="apiDatepicker.getNextTriggerProps()" :class="css({ p: 2 })">
                <ChevronRightIcon :size="16" />
              </button>
            </div>
            <table v-bind="apiDatepicker.getTableProps({ view: 'day' })">
              <thead v-bind="apiDatepicker.getTableHeaderProps({ view: 'day' })">
                <tr v-bind="apiDatepicker.getTableRowProps({ view: 'day' })">
                  <template v-for="(day) in apiDatepicker.weekDays">
                    <th scope="col" :aria-label="day.long">
                      {{ day.narrow }}
                    </th>
                  </template>
                </tr>
              </thead>
              <tbody v-bind="apiDatepicker.getTableBodyProps({ view: 'day' })">
                <template v-for="(week) in apiDatepicker.weeks">
                  <tr v-bind="apiDatepicker.getTableRowProps({ view: 'day' })">
                    <template v-for="(value) in week">
                      <td v-bind="apiDatepicker.getDayTableCellProps({ value })">
                        <div v-bind="apiDatepicker.getDayTableCellTriggerProps({ value })"
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