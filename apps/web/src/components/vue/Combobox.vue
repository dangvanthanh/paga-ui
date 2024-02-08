<script setup>
import * as zagCombobox from '@zag-js/combobox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, ref } from 'vue'
import { combobox } from '@/styled-system/recipes'

const styles = combobox()

const countriesData = [
  { label: 'React', code: 'react' },
  { label: 'Solid', code: 'solid' },
  { label: 'Vue', code: 'vue' },
]

const countries = ref(countriesData)

const collectionRef = computed(() =>
  zagCombobox.collection({
    items: countries.value,
    itemToValue: (item) => item.code,
    itemToString: (item) => item.label,
  }),
)

const [state, send] = useMachine(
  zagCombobox.machine({
    id: '1',
    collection: collectionRef.value,
    value: ['react'],
    onOpenChange(details) {
      if (!details.open) return
      countries.value = countriesData
    },
    onInputValueChange({ value }) {
      const filtered = countriesData.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase()),
      )
      countries.value = filtered.length > 0 ? filtered : countriesData
    },
  }),
  {
    context: computed(() => ({
      collection: collectionRef.value,
    })),
  },
)

const api = computed(() => zagCombobox.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <div v-bind="api.controlProps" :class="styles.control">
      <input v-bind="api.inputProps" :class="styles.input" />
      <button v-bind="api.triggerProps" :class="styles.trigger">▼</button>
    </div>
  </div>
  <div v-bind="api.positionerProps">
    <ul v-if="countries.length > 0" v-bind="api.contentProps" :class="styles.content">
      <li v-for="item in countries" :key="item.code" v-bind="api.getItemProps({ item })" :class="styles.item">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>