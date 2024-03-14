<script setup>
import * as zagHoverCard from '@zag-js/hover-card'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, Teleport } from 'vue'
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import { hoverCard } from '@/styled-system/recipes'
import Avatar from './Avatar.vue'

const styles = hoverCard()

const [state, send] = useMachine(zagHoverCard.machine({ id: '1' }))

const api = computed(() =>
	zagHoverCard.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <a href="https://twitter.com/dangvanthanh" target="_blank" v-bind="api.triggerProps" :class="styles.trigger">
    @dangvanthanh
  </a>
  <Teleport to="body" v-if="api.isOpen">
    <div v-bind="api.positionerProps">
      <div v-bind="api.contentProps" :class="styles.content">
        <div v-bind="api.arrowProps" :class="styles.arrow">
          <div v-bind="api.arrowTipProps"></div>
        </div>
        <div :class="flex({ align: 'flex-start', gap: 3 })">
          <div :class="css({ mt: 1 })">
            <Avatar id="DT" fallback="DT" />
          </div>
          <div :class="css({ flex: '1 1 0%' })">
            <p :class="css({ color: 'gray.900', fontWeight: 600 })">Dang Van Thanh</p>
            <p :class="css({ color: 'gray.600' })">Front-end Enginner</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>