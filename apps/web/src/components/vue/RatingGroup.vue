<script setup lang="ts">
import { ratingGroup } from '@/styled-system/recipes'
import * as zagRating from '@zag-js/rating-group'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Star, StarHalf } from 'lucide-vue-next'
import { computed, useId } from 'vue'

const styles = ratingGroup()

const [state, send] = useMachine(
	zagRating.machine({ id: useId(), value: 3, allowHalf: true }),
)

const api = computed(() => zagRating.connect(state.value, send, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getControlProps()" :class="styles.control">
      <template v-for="index in api.items" :key="index">
        <StarHalf v-if="api.getItemState({ index }).half" :class="styles.rating" v-bind="api.getItemProps({ index })" />
        <Star v-else :class="styles.rating" v-bind="api.getItemProps({ index })" />
      </template>
    </div>
    <input v-bind="api.getHiddenInputProps()" />
  </div>
</template>