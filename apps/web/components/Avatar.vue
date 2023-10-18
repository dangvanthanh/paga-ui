<script setup lang="ts">
import * as zagAvatar from "@zag-js/avatar";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { avatar } from "~/styled-system/recipes";

const props = defineProps<{
  id: string;
  fallback?: string;
  src?: string
}>();

const avatarClasses = avatar();

const [state, send] = useMachine(zagAvatar.machine({ id: props.id }));

const api = computed(() =>
  zagAvatar.connect(state.value, send, normalizeProps)
);
</script>

<template>
  <div v-bind="api.rootProps" v-bind:class="avatarClasses.root">
    <span v-bind="api.fallbackProps" v-bind:class="avatarClasses.fallback">{{
      props.fallback
    }}</span>
    <img
      v-bind:alt="props.fallback"
      v-bind:src="props.src"
      v-bind="api.imageProps"
      v-bind:class="avatarClasses.image"
    />
  </div>
</template>
