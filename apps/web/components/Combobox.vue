<script setup lang="ts">
import * as zagCombobox from '@zag-js/combobox';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed, ref } from 'vue';
import { combobox } from '~/styled-system/recipes';

const comboboxClasses = combobox()

const countriesData = [
  { label: 'Vietnam', code: 'VN' },
  { label: 'Canada', code: 'CA' },
  { label: 'USA', code: 'US' }
]

const countries = ref(countriesData);

const collectionRef = computed(() => zagCombobox.collection({
  items: countries.value,
  itemToValue: (item) => item.code,
  itemToString: (item) => item.label
}));

const [state, send] = useMachine(
  zagCombobox.machine({
    id: '1',
    collection: collectionRef.value,
    value: ['VN'],
    onOpenChange(details) {
      if (!details.open) return
      countries.value = countriesData
    },
    onInputValueChange({ value }) {
      const filtered = countriesData.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
      countries.value = filtered.length > 0 ? filtered : countriesData;
    }
  }),
  {
    context: computed(() => ({
      collection: collectionRef.value,
    }))
  }
)

const api = computed(() => zagCombobox.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.rootProps" :class="comboboxClasses.root">
    <div v-bind="api.controlProps" :class="comboboxClasses.control">
      <input v-bind="api.inputProps" :class="comboboxClasses.input" />
      <button v-bind="api.triggerProps" :class="comboboxClasses.trigger">▼</button>
    </div>
  </div>
  <div v-bind="api.positionerProps">
    <ul v-if="countries.length > 0" v-bind="api.contentProps" :class="comboboxClasses.content">
      <li v-for="item in countries" :key="item.code" v-bind="api.getItemProps({ item })" :class="comboboxClasses.item">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>