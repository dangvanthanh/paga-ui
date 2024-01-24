<script setup>
import * as zagMenu from '@zag-js/menu';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed, onMounted, Teleport } from 'vue';
import { menu } from '@styled-system/recipes';

const menuClasses = menu();

const [fileMenuState, fileMenuSend, fileMenuMachine] = useMachine(zagMenu.machine({ id: '3' }));
const fileMenuApi = computed(() => zagMenu.connect(fileMenuState.value, fileMenuSend, normalizeProps));

const [shareMenuState, shareMenuSend, shareMenuMachine] = useMachine(zagMenu.machine({ id: '' }));
const shareMenuApi = computed(() => zagMenu.connect(shareMenuState.value, shareMenuSend, normalizeProps));

onMounted(() => {
  setTimeout(() => {
    fileMenuApi.value.setChild(shareMenuMachine);
    shareMenuApi.value.setParent(fileMenuMachine);
  }, 1000);
});

const shareMenuTriggerProps = computed(() => fileMenuApi.value.getTriggerItemProps(shareMenuApi.value));
</script>

<template>
  <button v-bind="fileMenuApi.triggerProps" :class="menuClasses.trigger">
    File <span aria-hidden>▾</span>
  </button>
  <Teleport to="body">
    <div v-bind="fileMenuApi.positionerProps">
      <ul ref="fileMenuRef" v-bind="fileMenuApi.contentProps" :class="menuClasses.content">
        <li v-bind="fileMenuApi.getItemProps({ id: 'new-file' })" :class="menuClasses.item">New file</li>
        <li v-bind="fileMenuApi.getItemProps({ id: 'new-win' })" :class="menuClasses.item">New window</li>
        <li v-bind="shareMenuTriggerProps" :class="menuClasses.item">Share</li>
        <li v-bind="fileMenuApi.getItemProps({ id: 'print' })" :class="menuClasses.item">Print</li>
        <li v-bind="fileMenuApi.getItemProps({ id: 'help' })" :class="menuClasses.item">Help</li>
      </ul>
    </div>
  </Teleport>

  <Teleport to="body">
    <div v-bind="shareMenuApi.positionerProps">
      <ul ref="shareMenuRef" v-bind="shareMenuApi.contentProps" :class="menuClasses.content">
        <li v-bind="shareMenuApi.getItemProps({ id: 'messages' })" :class="menuClasses.item">Messages</li>
        <li v-bind="shareMenuApi.getItemProps({ id: 'airdrop' })" :class="menuClasses.item">Airdrop</li>
        <li v-bind="shareMenuApi.getItemProps({ id: 'whatsapp' })" :class="menuClasses.item">WhatsApp</li>
      </ul>
    </div>
  </Teleport>
</template>