<script setup lang="ts">
import { css } from '@/styled-system/css'
import { tour } from '@/styled-system/recipes'
import * as zagTour from '@zag-js/tour'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Teleport, computed, useId } from 'vue'

const styles = tour()

const steps: zagTour.StepDetails[] = [
	{
		type: 'dialog',
		id: 'start',
		title: 'Ready to go for a ride',
		description: "Let's take the tour component for a ride and have some fun!",
		actions: [{ label: "Let's go!", action: 'next' }],
	},
	{
		type: 'dialog',
		id: 'logic',
		title: 'Statechart',
		description: `As an engineer, you'll learn about the internal statechart that powers the tour.`,
		actions: [
			{ label: 'Prev', action: 'prev' },
			{ label: 'Next', action: 'next' },
		],
	},
	{
		type: 'dialog',
		id: 'end',
		title: 'Amazing! You got to the end',
		description: 'Like what you see? Now go ahead and use it in your project.',
		actions: [{ label: 'Finish', action: 'dismiss' }],
	},
]

const [state, send] = useMachine(zagTour.machine({ id: useId(), steps }))

const api = computed(() => zagTour.connect(state.value, send, normalizeProps))

const open = computed(() => api.value.open && api.value.step)
</script>

<template>
  <div>
    <button @click="api.start()" :class="css({ fontSize: 'sm' })">Start Tour</button>
  </div>

  <Teleport to="body" v-if="open">
    <div v-if="api.step?.backdrop" v-bind="api.getBackdropProps()" :class="styles.backdrop" />
    <div v-bind="api.getSpotlightProps()" />
    <div v-bind="api.getPositionerProps()" :class="styles.positioner">
      <div v-bind="api.getContentProps()" :class="styles.content">
        <div v-if="api.step?.arrow" v-bind="api.getArrowProps()">
          <div v-bind="api.getArrowTipProps()" />
        </div>
        <div v-bind="api.getProgressTextProps()" :class="styles.progressText">
          {{ api.getProgressText() }}
        </div>
        <p v-bind="api.getTitleProps()" :class="styles.title">{{ api.step?.title }}</p>
        <div v-bind="api.getDescriptionProps()" :class="styles.description">{{ api.step?.description }}</div>
        <div v-if="api.step?.actions" :class="styles.actions">
          <button v-for="action in api.step.actions" :key="action.label" v-bind="api.getActionTriggerProps({ action })"
            :class="styles.actionTrigger">
            {{ action.label }}
          </button>
        </div>
        <button v-bind="api.getCloseTriggerProps()" :class="styles.closeTrigger">
          <small>&#x2715;</small>
        </button>
      </div>
    </div>
  </Teleport>
</template>