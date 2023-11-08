<script setup lang="ts">
import * as zagRating from "@zag-js/rating-group";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { StarHalf, Star } from "lucide-vue-next";
import { ratingGroup } from '~/styled-system/recipes';

const ratingGroupClasses = ratingGroup();

const [state, send] = useMachine(zagRating.machine({ id: "1", value: 3 }));

const api = computed(() => zagRating.connect(state.value, send, normalizeProps));
</script>

<template>
  <div v-bind="api.rootProps" :class="ratingGroupClasses.root">
    <div v-bind="api.controlProps" :class="ratingGroupClasses.control">
      <template v-for="index in api.items" :key="index">
        <StarHalf v-if="api.getItemState({ index }).isHalf" :class="ratingGroupClasses.rating"
          v-bind="api.getItemProps({ index })" />
        <Star v-else :class="ratingGroupClasses.rating" v-bind="api.getItemProps({ index })" />
      </template>
    </div>
    <input v-bind="api.hiddenInputProps" />
  </div>
</template>