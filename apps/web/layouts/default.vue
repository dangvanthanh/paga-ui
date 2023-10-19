<script setup lang="ts">
import { Github, Sun } from "lucide-vue-next";
import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

useHead({
  title: 'Paga UI - Beautifully designed components built with Zagjs and Panda CSS that work with a variety of JS frameworks'
})
</script>

<template>
  <header
    role="banner"
    :class="
      css({
        px: '4',
        py: '4',
        zIndex: 10,
        shadow: 'sm',
        bg: 'white',
        pos: 'sticky',
        top: 0
      })
    "
  >
    <div
      :class="
        flex({
          maxW: '8xl',
          mx: 'auto',
          align: 'center',
          justify: 'space-between',
        })
      "
    >
      <h1>
        <a
          href="/"
          :class="
            css({
              fontSize: '2xl',
              fontFamily: 'Exo',
              fontWeight: '700',
              color: 'gray.900',
            })
          "
          >Paga UI</a
        >
      </h1>
      <nav :class="flex({ gap: 5 })">
        <a href="/documentation" :class="css({ color: 'gray.700' })"
          >Documentation</a
        >
        <a
          href="https://github.com/dangvanthanh/paga-ui"
          target="_blank"
          rel="noopener noreferrer"
          :class="css({ color: 'gray.700' })"
        >
          <Github :class="css({ w: 6, h: 6 })" />
        </a>
        <a href="#" :class="css({ color: 'gray.700' })">
          <Sun :class="css({ w: 6, h: 6 })" />
        </a>
      </nav>
    </div>
  </header>
  <main role="main">
    <slot />
  </main>
</template>
