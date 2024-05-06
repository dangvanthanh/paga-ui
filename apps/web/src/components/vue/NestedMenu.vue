<script setup>
import { useId } from '@/hooks/useId'
import { menu } from '@/styled-system/recipes'
import * as zagMenu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { Teleport, computed, onMounted } from 'vue'

const styles = menu()
const id = useId('nestedMenu')

const [fileMenuState, fileMenuSend, fileMenuMachine] = useMachine(
	zagMenu.machine({ id }),
)
const fileMenuApi = computed(() =>
	zagMenu.connect(fileMenuState.value, fileMenuSend, normalizeProps),
)

const [shareMenuState, shareMenuSend, shareMenuMachine] = useMachine(
	zagMenu.machine({ id: '' }),
)
const shareMenuApi = computed(() =>
	zagMenu.connect(shareMenuState.value, shareMenuSend, normalizeProps),
)

onMounted(() => {
	setTimeout(() => {
		fileMenuApi.value.setChild(shareMenuMachine)
		shareMenuApi.value.setParent(fileMenuMachine)
	}, 1000)
})

const shareMenuTriggerProps = computed(() =>
	fileMenuApi.value.getTriggerItemProps(shareMenuApi.value),
)
</script>

<template>
  <button v-bind="fileMenuApi.triggerProps" :class="styles.trigger">
    File <span aria-hidden>▾</span>
  </button>
  <Teleport to="body">
    <div v-bind="fileMenuApi.positionerProps">
      <ul ref="fileMenuRef" v-bind="fileMenuApi.contentProps" :class="styles.content">
        <li v-bind="fileMenuApi.getItemProps({ id: 'new-file' })" :class="styles.item">
          New file
        </li>
        <li v-bind="fileMenuApi.getItemProps({ id: 'new-win' })" :class="styles.item">
          New window
        </li>
        <li v-bind="shareMenuTriggerProps" :class="styles.item">Share</li>
        <li v-bind="fileMenuApi.getItemProps({ id: 'print' })" :class="styles.item">Print</li>
        <li v-bind="fileMenuApi.getItemProps({ id: 'help' })" :class="styles.item">Help</li>
      </ul>
    </div>
  </Teleport>

  <Teleport to="body">
    <div v-bind="shareMenuApi.positionerProps">
      <ul ref="shareMenuRef" v-bind="shareMenuApi.contentProps" :class="styles.content">
        <li v-bind="shareMenuApi.getItemProps({ id: 'messages' })" :class="styles.item">
          Messages
        </li>
        <li v-bind="shareMenuApi.getItemProps({ id: 'airdrop' })" :class="styles.item">
          Airdrop
        </li>
        <li v-bind="shareMenuApi.getItemProps({ id: 'whatsapp' })" :class="styles.item">
          WhatsApp
        </li>
      </ul>
    </div>
  </Teleport>
</template>