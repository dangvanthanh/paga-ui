<script setup lang="ts">
import * as zagHoverCard from '@zag-js/hover-card';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed, Teleport } from 'vue';
import { css } from '~/styled-system/css';
import { flex } from '~/styled-system/patterns';
import { hoverCard } from '~/styled-system/recipes';

const hoverCardClasses = hoverCard();

const [state, send] = useMachine(zagHoverCard.machine({ id: '1' }));

const api = computed(() => zagHoverCard.connect(state.value, send, normalizeProps));
</script>


<template>
  <a href="https://twitter.com/dangvanthanh" _target="blank" v-bind="api.triggerProps" :class="hoverCardClasses.trigger">
    DT
  </a>
  <Teleport to="body" v-if="api.isOpen">
    <div v-bind="api.positionerProps">
      <div v-bind="api.contentProps" :class="hoverCardClasses.content">
        <div v-bind="api.arrowProps" :class="hoverCardClasses.arrow">
          <div v-bind="api.arrowTipProps"></div>
        </div>
        <div :class="flex({ align: 'center', gap: 3 })">
          <Avatar id="DT" fallback="DT" />
          <div :class="css({ flex: '1 1 0%' })">
            <p>Dang Van Thanh</p>
            <p :class="css({ color: 'gray.300' })">@dangvanthanh</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
