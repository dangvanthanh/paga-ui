<script setup lang="ts">
import * as zagAccordion from "@zag-js/accordion";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { accordion } from "~/styled-system/recipes";

const zagAccordionClasses = accordion();

const data = [
  {
    title: "Solid",
    content:
      "Simple and performant reactivity for building user interfaces.",
  },
  {
    title: "Vue",
    content:
      "An approachable, performant and versatile famework for building web user interfaces.",
  },
];

const [state, send] = useMachine(zagAccordion.machine({ id: "1", value: ["Solid"] }));

const api = computed(() =>
  zagAccordion.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div :class="zagAccordionClasses.root">
    <div
      v-for="item in data"
      :key="item.title"
      v-bind="api.getItemProps({ value: item.title })"
      :class="zagAccordionClasses.item"
    >
      <h3>
        <button
          :class="zagAccordionClasses.trigger"
          v-bind="api.getItemTriggerProps({ value: item.title })"
        >
          {{ item.title }}
        </button>
      </h3>
      <div
        v-bind="api.getItemContentProps({ value: item.title })"
        :class="zagAccordionClasses.content"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
