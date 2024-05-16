<script setup>
import { useId } from '@/hooks/useId'
import { ratingGroup } from '@/styled-system/recipes'
import * as zagRating from '@zag-js/rating-group'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Star, StarHalf } from 'lucide-vue-next'
import { computed } from 'vue'

const styles = ratingGroup()
const [state, send] = useMachine(
	zagRating.machine({ id: useId('ratingGroup'), value: 3, allowHalf: true }),
)
const api = computed(() => zagRating.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.rootProps" :class="styles.root">
    <div v-bind="api.controlProps" :class="styles.control">
      <template v-for="index in api.items" :key="index">
        <StarHalf v-if="api.getItemState({ index }).isHalf" :class="styles.rating" v-bind="api.getItemProps({ index })" />
        <Star v-else :class="styles.rating" v-bind="api.getItemProps({ index })" />
      </template>
    </div>
    <input v-bind="api.hiddenInputProps" />
  </div>
</template>