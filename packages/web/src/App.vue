<script setup lang="ts">
import { ref } from "vue";
import {
  AlignJustify,
  SkipForward,
  SkipBack,
  Play,
  Pause,
  Repeat,
} from "lucide-vue-next";
import { css, cx } from "@styled-system/css";
import { flex, stack, grid, vstack, hstack } from "@styled-system/patterns";
import { button, label, input } from "@styled-system/recipes";
import { Avatar, Pagination, Switch, Slider } from "@/ui";
import { teams } from "@/lib";

const isPlaying = ref(true);

const togglePlaying = () => (isPlaying.value = !isPlaying.value);
</script>

<template>
  <header
    role="banner"
    :class="css({ px: '4', py: '4', pos: 'relative', zIndex: 10 })"
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
      <nav :class="flex({ gap: '3' })">
        <a href="#" :class="css({ color: 'gray.700' })">Documentation</a>
        <a href="#" :class="css({ color: 'gray.700' })">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a href="#" :class="css({ color: 'gray.700' })">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sun"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </a>
      </nav>
    </div>
  </header>
  <main role="main">
    <div :class="css({ maxW: '7xl', mx: 'auto', px: '4' })">
      <div :class="flex({ align: 'start', wrap: 'wrap' })">
        <div
          :class="
            css({
              w: 'full',
              lg: {
                w: '1/3',
              },
            })
          "
        >
          <h2
            :class="
              css({
                fontSize: '6xl',
                lineHeight: '1',
                pt: '12',
                fontWeight: '700',
              })
            "
          >
            Start building your app now
          </h2>
          <p :class="css({ fontSize: 'xl', pt: '6' })">
            Beautifully designed components built with Zagjs and Panda CSS that
            work with a variety of JS frameworks.
          </p>

          <button
            :class="
              cx(
                css({ w: '1/2', mt: 8, fontWeight: 700 }),
                button({ variant: 'primary', size: 'lg' })
              )
            "
          >
            Get Started
          </button>
        </div>
        <div
          :class="
            css({
              w: 'full',
              my: '8',
              lg: {
                w: '2/3',
                pl: '12',
                mt: '0',
                transform: 'translate(100px, -20px) skew(6deg, -6deg)',
              },
            })
          "
        >
          <div :class="grid({ columns: 2, gap: 4, lg: { gap: 8 } })">
            <div
              :class="
                css({
                  border: '1px solid',
                  borderColor: 'gray.100',
                  boxShadow: 'sm',
                  p: '6',
                  borderRadius: 'sm',
                })
              "
            >
              <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
                Your team
              </h3>
              <p :class="css({ fontSize: 'sm', color: 'gray.600' })">
                Invite and manage your team members.
              </p>
              <div :class="stack({ direction: 'column', gap: '4', mt: '6' })">
                <div :class="hstack({ gap: 2 })">
                  <input
                    type="email"
                    placeholder="Email address"
                    :class="cx(input({ size: 'sm' }), css({ flex: '1 1 0%' }))"
                  />
                  <button :class="button()">Invite</button>
                </div>
              </div>
              <div :class="vstack({ alignItems: 'flex-start', gap: 4, mt: 6 })">
                <template v-for="team in teams">
                  <div
                    :class="
                      hstack({
                        gap: 4,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderBottom: '1px solid',
                        borderColor: 'gray.200',
                        w: 'full',
                        py: '2',
                      })
                    "
                  >
                    <div :class="css({ w: 10, h: 10, mt: 2 })">
                      <Avatar id="7" :fallback="team.avatar" />
                    </div>
                    <div
                      :class="
                        css({
                          fontSize: 'sm',
                          color: 'gray.800',
                          flex: '1 1 0%',
                          w: 'auto',
                        })
                      "
                    >
                      {{ team.name }}
                    </div>
                    <div>
                      <a
                        :href="team.email"
                        :class="css({ fontSize: 'sm', color: 'gray.500' })"
                        >{{ team.email }}</a
                      >
                    </div>
                  </div>
                </template>
                <div :class="flex({ w: 'full', justify: 'center' })">
                  <Pagination :count="teams.length" :page-size="1" />
                </div>
              </div>
            </div>
            <div
              :class="
                css({
                  border: '1px solid',
                  borderColor: 'gray.100',
                  boxShadow: 'sm',
                  p: '6',
                  borderRadius: 'sm',
                })
              "
            >
              <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
                Sign Up
              </h3>
              <p :class="css({ fontSize: 'sm', color: 'gray.600' })">
                Create an account and discover the worlds' best UI component
                framework.
              </p>
              <form :class="stack({ direction: 'column', gap: '4', mt: '6' })">
                <div :class="stack({ direction: 'column' })">
                  <label for="username" :class="label({ size: 'sm' })"
                    >Username</label
                  >
                  <input
                    id="username"
                    type="text"
                    :class="input({ size: 'sm' })"
                  />
                </div>
                <div :class="stack({ direction: 'column' })">
                  <label for="password" :class="label({ size: 'sm' })"
                    >Password</label
                  >
                  <input
                    id="password"
                    type="password"
                    :class="input({ size: 'sm' })"
                  />
                </div>
                <button :class="cx(css({ w: 'full' }), button())">
                  Signup
                </button>
              </form>
              <hr :class="css({ borderColor: 'gray.200', my: '6' })" />
              <div :class="stack({ gap: '4', my: '6' })">
                <div :class="stack({ gap: '3', direction: 'row' })">
                  <button
                    :class="
                      cx(css({ w: 'full' }), button({ variant: 'ghost' }))
                    "
                  >
                    Google
                  </button>
                  <button
                    :class="
                      cx(css({ w: 'full' }), button({ variant: 'ghost' }))
                    "
                  >
                    Github
                  </button>
                </div>
              </div>
            </div>
            <div
              :class="
                css({
                  border: '1px solid',
                  borderColor: 'gray.100',
                  boxShadow: 'sm',
                  p: '6',
                  borderRadius: 'sm',
                })
              "
            >
              <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
                Notifications
              </h3>
              <p :class="css({ fontSize: 'sm', color: 'gray.600' })">
                Manage your notification settings.
              </p>
              <hr :class="css({ borderColor: 'gray.200', my: '6' })" />
              <div :class="flex({ gap: '8', justify: 'space-between' })">
                <div>
                  <h4 :class="css({ fontSize: 'sm', fontWeight: '600' })">
                    Comments
                  </h4>
                  <p :class="css({ fontSize: 'sm', color: 'gray.600' })">
                    Receive notifications when someone comments on your
                    documents or mentions you.
                  </p>
                </div>
                <div
                  :class="
                    flex({ direction: 'column', align: 'start', gap: '1' })
                  "
                >
                  <Switch id="1" label="Push" />
                  <Switch id="2" label="Email" />
                  <Switch id="3" label="Slack" />
                </div>
              </div>
              <hr :class="css({ borderColor: 'gray.200', my: '6' })" />
              <div :class="flex({ gap: '8', justify: 'space-between' })">
                <div>
                  <h4 :class="css({ fontSize: 'sm', fontWeight: '600' })">
                    Favorites
                  </h4>
                  <p :class="css({ fontSize: 'sm', color: 'gray.600' })">
                    Receive notifications when someone comments on your
                    documents or mentions you.
                  </p>
                </div>
                <div
                  :class="
                    flex({ direction: 'column', align: 'start', gap: '1' })
                  "
                >
                  <Switch id="4" label="Push" />
                  <Switch id="5" label="Email" />
                  <Switch id="6" label="Slack" />
                </div>
              </div>
            </div>
            <div
              :class="
                css({
                  border: '1px solid',
                  borderColor: 'gray.100',
                  boxShadow: 'sm',
                  p: '6',
                  borderRadius: 'sm',
                })
              "
            >
              <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Sound</h3>
              <div :class="css({ mt: 6 })">
                <Slider />
                <div
                  :class="
                    grid({ columns: 5, gap: 1, alignItems: 'center', mt: 3 })
                  "
                >
                  <div :class="flex({ justify: 'center' })">
                    <button
                      type="button"
                      :class="css({ color: 'gray.500', cursor: 'pointer' })"
                    >
                      <Repeat />
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center' })">
                    <button
                      type="button"
                      :class="css({ color: 'gray.500', cursor: 'pointer' })"
                    >
                      <SkipBack />
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center', color: 'gray.900' })">
                    <button
                      type="button"
                      :class="
                        flex({
                          cursor: 'pointer',
                          w: 16,
                          h: 16,
                          align: 'center',
                          justify: 'center',
                          borderWidth: '2px',
                          borderStyle: 'dashed',
                          borderRadius: 'full',
                          borderColor: 'gray.400',
                        })
                      "
                      @click="togglePlaying()"
                    >
                      <div
                        :class="
                          flex({
                            w: 12,
                            h: 12,
                            align: 'center',
                            justify: 'center',
                            borderWidth: '2px',
                            borderStyle: 'dashed',
                            borderRadius: 'full',
                            borderColor: 'red.400',
                          })
                        "
                      >
                        <Play
                          :class="css({ w: 8, h: 8, ml: 1 })"
                          v-if="isPlaying"
                        />
                        <Pause :class="css({ w: 8, h: 8 })" v-else />
                      </div>
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center' })">
                    <button
                      type="button"
                      :class="css({ color: 'gray.500', cursor: 'pointer' })"
                    >
                      <SkipForward />
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center' })">
                    <button
                      type="button"
                      :class="css({ color: 'gray.500', cursor: 'pointer' })"
                    >
                      <AlignJustify />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
