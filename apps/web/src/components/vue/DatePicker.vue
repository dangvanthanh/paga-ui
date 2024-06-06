<script setup lang="ts">
import { useId } from '@/hooks/useId';
import * as zagDatepicker from '@zag-js/date-picker'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue';

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
  <div>
    <div v-bind="apiDatepicker.getControlProps()">
      <input v-bind="apiDatepicker.getInputProps()" />
      <button v-bind="apiDatepicker.getTriggerProps()">🗓</button>
    </div>
    <Teleport to="body">
      <div v-bind="apiDatepicker.getPositionerProps()">
        <div v-bind="apiDatepicker.getContentProps()">
          <!-- Day View -->
          <div v-show="apiDatepicker.view === 'day'">
            <div v-bind="apiDatepicker.getViewControlProps({ view: 'year' })">
              <button v-bind="apiDatepicker.getPrevTriggerProps()">Prev</button>
              <button v-bind="apiDatepicker.getViewTriggerProps()">
                {{apiDatepicker.visibleRangeText.start}}
              </button>
              <button v-bind="apiDatepicker.getNextTriggerProps()">Next</button>
            </div>

            <table v-bind="apiDatepicker.getTableProps({ view: 'day' })">
              <thead v-bind="apiDatepicker.getTableHeaderProps({ view: 'day' })">
                <tr v-bind="apiDatepicker.getTableRowProps({ view: 'day' })">
                  <template v-for="(day) in apiDatepicker.weekDays">
                    <th scope="col" :aria-label="day.long">
                      {{day.narrow}}
                    </th>
                  </template>
                </tr>
              </thead>
              <tbody  v-bind="apiDatepicker.getTableBodyProps({ view: 'day' })">
                <template v-for="(week) in apiDatepicker.weeks">
                  <tr v-bind="apiDatepicker.getTableRowProps({ view: 'day' })">
                    <template v-for="(value) in week">
                      <td v-bind="apiDatepicker.getDayTableCellProps({ value })">
                        <div  v-bind="apiDatepicker.getDayTableCellTriggerProps({ value })">
                          {{value.day}}
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
