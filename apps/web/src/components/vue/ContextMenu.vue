<script setup lang="ts">
import { css } from '@/styled-system/css'
import { menu } from '@/styled-system/recipes'
import * as zagMenu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Copy, Scissors, ClipboardCopy, ClipboardPaste } from 'lucide-vue-next'
import { computed, useId } from 'vue'

const styles = menu()

const items = [
	{ name: 'Cut', value: 'cut', icon: Scissors },
	{ name: 'Copy', value: 'copy', icon: Copy },
	{ name: 'Copy As', value: 'copy-as', icon: ClipboardCopy },
	{ name: 'Paste', value: 'paste', icon: ClipboardPaste },
]

const [state, send] = useMachine(
	zagMenu.machine({ id: useId(), 'aria-label': 'File' }),
)

const api = computed(() => zagMenu.connect(state.value, send, normalizeProps))
</script>

<template>
  <div>
    <button v-bind="api.getContextTriggerProps()" :class="styles.trigger">
      <div>Open context menu</div>
    </button>
    <div v-bind="api.getPositionerProps()">
      <ul v-bind="api.getContentProps()" :class="styles.content">
        <template v-for="item in items">
          <li v-bind="api.getItemProps({ value: item.value })" :class="styles.item">
            <component :is="item.icon" :size="16" />
            <span :class="css({ ml: 2 })">{{ item.name }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>