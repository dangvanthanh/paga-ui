<script setup>
import * as zagSelect from '@zag-js/select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, Teleport } from 'vue'
import { select } from '@/styled-system/recipes'

const selectClasses = select()

const selectData = [
  { label: 'Vietnam', value: 'VN' },
  { label: 'Canada', value: 'CA' },
  { label: 'USA', value: 'US' },
]

const [state, send] = useMachine(
  zagSelect.machine({
    id: '1',
    collection: zagSelect.collection({
      items: selectData,
    }),
    value: ['VN'],
  }),
)

const api = computed(() => zagSelect.connect(state.value, send, normalizeProps))
</script>

<template>
  <div :class="selectClasses.root">
    <button v-bind="api.triggerProps" :class="selectClasses.trigger">
      <span>{{ api.valueAsString || 'Select option' }}</span>
      <span>▼</span>
    </button>
  </div>

  <Teleport to="body">
    <div v-bind="api.positionerProps">
      <ul v-bind="api.contentProps" :class="selectClasses.content">
        <li
          v-for="item in selectData"
          :key="item.value"
          v-bind="api.getItemProps({ item })"
          :class="selectClasses.item"
        >
          <span :class="selectClasses.itemLabel">{{ item.label }}</span>
          <span v-bind="api.getItemIndicatorProps({ item })" :class="selectClasses.itemIndicator"
            >✓</span
          >
        </li>
      </ul>
    </div>
  </Teleport>
</template>
