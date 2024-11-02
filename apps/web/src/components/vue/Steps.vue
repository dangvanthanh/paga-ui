<script setup lang="ts">
import { button, steps } from '@/styled-system/recipes'
import * as zagSteps from '@zag-js/steps'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, useId } from 'vue'

const styles = steps()

const stepsData = [
	{ title: 'Step 1' },
	{ title: 'Step 2' },
	{ title: 'Step 3' },
]

const [state, send] = useMachine(
	zagSteps.machine({
		id: useId(),
		count: stepsData.length,
	}),
)
const api = computed(() => zagSteps.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getListProps()" :class="styles.list">
      <div v-for="(step, index) in stepsData" :key="index" v-bind="api.getItemProps({ index })" :class="styles.item">
        <button v-bind="api.getTriggerProps({ index })" :class="styles.trigger">
          <div v-bind="api.getIndicatorProps({ index })" :class="styles.indicator">
            {{ index + 1 }}</div>
          <span>{{ step.title }}</span>
        </button>
        <div v-bind="api.getSeparatorProps({ index })" :class="styles.separator" />
      </div>
    </div>

    <div v-for="(step, index) in stepsData" :key="index" v-bind="api.getContentProps({ index })"
      :class="styles.content">
      {{ step.title }}
    </div>

    <div v-bind="api.getContentProps({ index: stepsData.length })" :class="styles.content">
      Steps Complete - Thank you for filling out the form!
    </div>

    <div>
      <button v-bind="api.getPrevTriggerProps()" :class="button()">Back</button>
      <button v-bind="api.getNextTriggerProps()" :class="button()">Next</button>
    </div>
  </div>
</template>