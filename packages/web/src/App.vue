<script setup lang="ts">
import { ref } from "vue";
import {
  AlignJustify,
  SkipForward,
  SkipBack,
  Play,
  Pause,
  Repeat,
  Github,
  Sun,
} from "lucide-vue-next";
import { css, cx } from "@styled-system/css";
import { flex, stack, grid, vstack, hstack } from "@styled-system/patterns";
import { button, label, input } from "@styled-system/recipes";
import { Avatar, Pagination, Switch, Slider } from "@/ui";
import { teams } from "@/lib";

const isPlaying = ref(true);

const cardClasses = css({
  border: "1px solid",
  borderColor: "gray.100",
  boxShadow: "sm",
  p: "6",
  borderRadius: "sm",
});

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
          <Github :class="css({ w: 6, h: 6 })" />
        </a>
        <a href="#" :class="css({ color: 'gray.700' })">
          <Sun :class="css({ w: 6, h: 6 })" />
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
            <div :class="cardClasses">
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
            <div :class="cardClasses">
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
            <div :class="cardClasses">
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
            <div :class="cardClasses">
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
                      <Repeat :class="css({ w: 5, h: 5 })" />
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center' })">
                    <button
                      type="button"
                      :class="css({ color: 'gray.500', cursor: 'pointer' })"
                    >
                      <SkipBack :class="css({ w: 5, h: 5 })" />
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center', color: 'gray.900' })">
                    <button
                      type="button"
                      :class="
                        flex({
                          cursor: 'pointer',
                          w: 12,
                          h: 12,
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
                            w: 10,
                            h: 10,
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
                          :class="css({ w: 6, h: 6, ml: 1 })"
                          v-if="isPlaying"
                        />
                        <Pause :class="css({ w: 6, h: 6 })" v-else />
                      </div>
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center' })">
                    <button
                      type="button"
                      :class="css({ color: 'gray.500', cursor: 'pointer' })"
                    >
                      <SkipForward :class="css({ w: 5, h: 5 })" />
                    </button>
                  </div>
                  <div :class="flex({ justify: 'center' })">
                    <button
                      type="button"
                      :class="css({ color: 'gray.500', cursor: 'pointer' })"
                    >
                      <AlignJustify :class="css({ w: 5, h: 5 })" />
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
