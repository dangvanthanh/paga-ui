<script setup>
import { useId } from '@/hooks/useId'
import { menu } from '@/styled-system/recipes'
import * as zagMenu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Teleport, computed, onMounted } from 'vue'

const styles = menu()
const [fileMenuState, fileMenuSend, fileMenuMachine] = useMachine(
	zagMenu.machine({ id: useId('fileMenu'), 'aria-label': 'File' }),
)
const fileMenu = computed(() =>
	zagMenu.connect(fileMenuState.value, fileMenuSend, normalizeProps),
)

const [shareMenuState, shareMenuSend, shareMenuMachine] = useMachine(
	zagMenu.machine({ id: useId('shareMenu'), 'aria-label': 'Menu' }),
)

const shareMenu = computed(() =>
	zagMenu.connect(shareMenuState.value, shareMenuSend, normalizeProps),
)

onMounted(() => {
	setTimeout(() => {
		fileMenu.value.setChild(shareMenuMachine)
		shareMenu.value.setParent(fileMenuMachine)
	}, 500)
})

const shareMenuTrigger = computed(() =>
	fileMenu.value.getTriggerItemProps(shareMenu.value),
)
</script>

<template>
  <button v-bind="fileMenu.getTriggerProps()" :class="styles.trigger">
    File <span aria-hidden>▾</span>
  </button>
  <Teleport to="body">
    <div v-bind="fileMenu.getPositionerProps()">
      <ul v-bind="fileMenu.getContentProps()" :class="styles.content">
        <li v-bind="fileMenu.getItemProps({ id: 'new-file' })" :class="styles.item">
          New file
        </li>
        <li v-bind="fileMenu.getItemProps({ id: 'new-win' })" :class="styles.item">
          New window
        </li>
        <li v-bind="shareMenuTrigger" :class="styles.item">Share</li>
        <li v-bind="fileMenu.getItemProps({ id: 'print' })" :class="styles.item">Print</li>
        <li v-bind="fileMenu.getItemProps({ id: 'help' })" :class="styles.item">Help</li>
      </ul>
    </div>
  </Teleport>
  <Teleport to="body">
    <div v-bind="shareMenu.getPositionerProps()">
      <ul v-bind="shareMenu.getContentProps()" :class="styles.content">
        <li v-bind="shareMenu.getItemProps({ id: 'messages' })" :class="styles.item">
          Messages
        </li>
        <li v-bind="shareMenu.getItemProps({ id: 'airdrop' })" :class="styles.item">
          Airdrop
        </li>
        <li v-bind="shareMenu.getItemProps({ id: 'whatsapp' })" :class="styles.item">
          WhatsApp
        </li>
      </ul>
    </div>
  </Teleport>
</template>