<script setup lang="ts">
import * as zagSwitch from "@zag-js/switch";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { css, cx } from "../styled-system/css";
import { flex, stack } from "../styled-system/patterns";
import { button, switches, label, input } from "../styled-system/recipes";

const switchClasses = switches({ size: "sm" });

const [statePush, sendPush] = useMachine(zagSwitch.machine({ id: "1" }));
const [stateEmail, sendEmail] = useMachine(zagSwitch.machine({ id: "2" }));
const [stateSlack, sendSlack] = useMachine(zagSwitch.machine({ id: "3" }));

const apiPush = computed(() =>
  zagSwitch.connect(statePush.value, sendPush, normalizeProps)
);

const apiEmail = computed(() =>
  zagSwitch.connect(stateEmail.value, sendEmail, normalizeProps)
);

const apiSlack = computed(() =>
  zagSwitch.connect(stateSlack.value, sendSlack, normalizeProps)
);
</script>

<template>
  <header role="banner" v-bind:class="css({ px: '4', py: '4' })">
    <div
      v-bind:class="
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
          v-bind:class="
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
      <nav v-bind:class="flex({ gap: '3' })">
        <a href="#" v-bind:class="css({ color: 'gray.700' })">Documentation</a>
        <a href="#" v-bind:class="css({ color: 'gray.700' })">
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
        <a href="#" v-bind:class="css({ color: 'gray.700' })">
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
    <div v-bind:class="css({ maxW: '7xl', mx: 'auto', px: '4' })">
      <div v-bind:class="flex({ align: 'start', wrap: 'wrap' })">
        <div
          v-bind:class="
            css({
              w: 'full',
              lg: {
                w: '1/3',
              },
            })
          "
        >
          <h2
            v-bind:class="css({ fontSize: '6xl', lineHeight: '1', pt: '12' })"
          >
            Start building your app now
          </h2>
          <p v-bind:class="css({ fontSize: 'xl', pt: '6' })">
            Beautifully designed components built with Zagjs and Panda CSS that
            work with a variety of JS frameworks.
          </p>
        </div>
        <div
          v-bind:class="
            css({
              w: 'full',
              my: '8',
              lg: {
                w: '2/3',
                pl: '32',
                mt: '0',
              },
            })
          "
        >
          <div
            v-bind:class="
              css({
                border: '1px solid',
                borderColor: 'gray.100',
                boxShadow: 'sm',
                p: '6',
                borderRadius: 'sm',
              })
            "
          >
            <h3 v-bind:class="css({ fontSize: 'lg', fontWeight: '600' })">
              Notifications
            </h3>
            <p v-bind:class="css({ fontSize: 'sm', color: 'gray.600' })">
              Manage your notification settings.
            </p>
            <hr v-bind:class="css({ borderColor: 'gray.200', my: '6' })" />
            <div v-bind:class="flex({ gap: '8', justify: 'space-between' })">
              <div>
                <h4 v-bind:class="css({ fontSize: 'sm', fontWeight: '600' })">
                  Comments
                </h4>
                <p v-bind:class="css({ fontSize: 'sm', color: 'gray.600' })">
                  Receive notifications when someone comments on your documents
                  or mentions you.
                </p>
              </div>
              <div
                v-bind:class="
                  flex({ direction: 'column', align: 'start', gap: '1' })
                "
              >
                <label
                  for="comments-push"
                  v-bind="apiPush.rootProps"
                  v-bind:class="switchClasses.root"
                >
                  <input id="comments-push" v-bind="apiPush.hiddenInputProps" />
                  <span
                    v-bind="apiPush.controlProps"
                    v-bind:class="switchClasses.control"
                  >
                    <span
                      v-bind="apiPush.thumbProps"
                      v-bind:class="switchClasses.thumb"
                    />
                  </span>
                  <span
                    v-bind="apiPush.labelProps"
                    v-bind:class="switchClasses.label"
                  >
                    <span v-if="apiPush.isChecked">Push</span>
                    <span v-else>Push</span>
                  </span>
                </label>
                <label
                  for="comments-email"
                  v-bind="apiEmail.rootProps"
                  v-bind:class="switchClasses.root"
                >
                  <input
                    id="comments-email"
                    v-bind="apiEmail.hiddenInputProps"
                  />
                  <span
                    v-bind="apiEmail.controlProps"
                    v-bind:class="switchClasses.control"
                  >
                    <span
                      v-bind="apiEmail.thumbProps"
                      v-bind:class="switchClasses.thumb"
                    />
                  </span>
                  <span
                    v-bind="apiEmail.labelProps"
                    v-bind:class="switchClasses.label"
                  >
                    <span v-if="apiEmail.isChecked">Email</span>
                    <span v-else>Email</span>
                  </span>
                </label>
                <label
                  for="comments-slack"
                  v-bind="apiSlack.rootProps"
                  v-bind:class="switchClasses.root"
                >
                  <input
                    id="comments-slack"
                    v-bind="apiSlack.hiddenInputProps"
                  />
                  <span
                    v-bind="apiSlack.controlProps"
                    v-bind:class="switchClasses.control"
                  >
                    <span
                      v-bind="apiSlack.thumbProps"
                      v-bind:class="switchClasses.thumb"
                    />
                  </span>
                  <span
                    v-bind="apiSlack.labelProps"
                    v-bind:class="switchClasses.label"
                  >
                    <span v-if="apiSlack.isChecked">Slack</span>
                    <span v-else>Slack</span>
                  </span>
                </label>
              </div>
            </div>
            <hr v-bind:class="css({ borderColor: 'gray.200', my: '6' })" />
            <div v-bind:class="flex({ gap: '8', justify: 'space-between' })">
              <div>
                <h4 v-bind:class="css({ fontSize: 'sm', fontWeight: '600' })">
                  Favorites
                </h4>
                <p v-bind:class="css({ fontSize: 'sm', color: 'gray.600' })">
                  Receive notifications when someone comments on your documents
                  or mentions you.
                </p>
              </div>
              <div
                v-bind:class="
                  flex({ direction: 'column', align: 'start', gap: '1' })
                "
              >
                <label
                  for="favorites-push"
                  v-bind="apiPush.rootProps"
                  v-bind:class="switchClasses.root"
                >
                  <input
                    id="favorites-push"
                    v-bind="apiPush.hiddenInputProps"
                  />
                  <span
                    v-bind="apiPush.controlProps"
                    v-bind:class="switchClasses.control"
                  >
                    <span
                      v-bind="apiPush.thumbProps"
                      v-bind:class="switchClasses.thumb"
                    />
                  </span>
                  <span
                    v-bind="apiPush.labelProps"
                    v-bind:class="switchClasses.label"
                  >
                    <span v-if="apiPush.isChecked">Push</span>
                    <span v-else>Push</span>
                  </span>
                </label>
                <label
                  for="favorites-email"
                  v-bind="apiEmail.rootProps"
                  v-bind:class="switchClasses.root"
                >
                  <input
                    id="favorites-email"
                    v-bind="apiEmail.hiddenInputProps"
                  />
                  <span
                    v-bind="apiEmail.controlProps"
                    v-bind:class="switchClasses.control"
                  >
                    <span
                      v-bind="apiEmail.thumbProps"
                      v-bind:class="switchClasses.thumb"
                    />
                  </span>
                  <span
                    v-bind="apiEmail.labelProps"
                    v-bind:class="switchClasses.label"
                  >
                    <span v-if="apiEmail.isChecked">Email</span>
                    <span v-else>Email</span>
                  </span>
                </label>
                <label
                  for="favorites-slack"
                  v-bind="apiSlack.rootProps"
                  v-bind:class="switchClasses.root"
                >
                  <input
                    id="favorites-slack"
                    v-bind="apiSlack.hiddenInputProps"
                  />
                  <span
                    v-bind="apiSlack.controlProps"
                    v-bind:class="switchClasses.control"
                  >
                    <span
                      v-bind="apiSlack.thumbProps"
                      v-bind:class="switchClasses.thumb"
                    />
                  </span>
                  <span
                    v-bind="apiSlack.labelProps"
                    v-bind:class="switchClasses.label"
                  >
                    <span v-if="apiSlack.isChecked">Slack</span>
                    <span v-else>Slack</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div
            v-bind:class="
              css({
                border: '1px solid',
                borderColor: 'gray.100',
                boxShadow: 'sm',
                p: '6',
                borderRadius: 'sm',
                mt: '8',
              })
            "
          >
            <h3 v-bind:class="css({ fontSize: 'lg', fontWeight: '600' })">
              Sign Up
            </h3>
            <p v-bind:class="css({ fontSize: 'sm', color: 'gray.600' })">
              Create an account and discover the worlds' best UI component
              framework.
            </p>
            <div
              v-bind:class="stack({ direction: 'column', gap: '4', mt: '6' })"
            >
              <div v-bind:class="stack({ direction: 'column' })">
                <label for="username" v-bind:class="label({ size: 'sm' })"
                  >Username</label
                >
                <input
                  id="username"
                  type="text"
                  v-bind:class="input({ size: 'sm' })"
                />
              </div>
              <div v-bind:class="stack({ direction: 'column' })">
                <label for="password" v-bind:class="label({ size: 'sm' })"
                  >Password</label
                >
                <input
                  id="password"
                  type="password"
                  v-bind:class="input({ size: 'sm' })"
                />
              </div>
              <button v-bind:class="cx(css({ w: 'full' }), button())">
                Signup
              </button>
            </div>
            <hr v-bind:class="css({ borderColor: 'gray.200', my: '6' })" />
            <div v-bind:class="stack({ gap: '4', my: '6' })">
              <div v-bind:class="stack({ gap: '3', direction: 'row' })">
                <button
                  v-bind:class="
                    cx(css({ w: 'full' }), button({ variant: 'ghost' }))
                  "
                >
                  Google
                </button>
                <button
                  v-bind:class="
                    cx(css({ w: 'full' }), button({ variant: 'ghost' }))
                  "
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
