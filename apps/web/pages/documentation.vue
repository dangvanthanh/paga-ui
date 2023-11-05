<script setup lang="ts">
import { flex, grid } from "~/styled-system/patterns";
import { css, cx } from "~/styled-system/css";

const cardClasses = css({
  border: "1px solid",
  borderColor: "gray.100",
  boxShadow: "sm",
  p: "4",
  borderRadius: "lg",
});

const cardContentClasses = flex({
  mt: 6,
  borderRadius: "lg",
  h: 32,
  align: "center",
  justify: "center",
  p: 6,
});
</script>

<template>
  <div :class="css({ maxW: '7xl', mx: 'auto', px: '4' })">
    <div :class="flex({ align: 'center' })">
      <div :class="css({
        w: 'full',
        lg: {
          w: '2/5',
        },
      })
        ">
        <h2 :class="css({
          fontSize: '6xl',
          lineHeight: '1',
          pt: '12',
          fontWeight: '700',
        })
          ">
          Components
        </h2>
      </div>
    </div>
    <div :class="grid({ my: 12, columns: { base: 1, md: 2, lg: 3 }, gap: 6 })">
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Accordion</h3>
        <div :class="cx(css({ bg: 'green.50' }), cardContentClasses)">
          <Accordion />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Avatar</h3>
        <div :class="cx(css({ bg: 'green.100' }), cardContentClasses)">
          <Avatar id="1" fallback="DT" />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Checkbox</h3>
        <div :class="cx(css({ bg: 'green.200' }), cardContentClasses)">
          <Checkbox />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Combobox</h3>
        <div :class="cx(css({ bg: 'green.200' }), cardContentClasses)">
          <Combobox />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Dialog</h3>
        <div :class="cx(css({ bg: 'green.100' }), cardContentClasses)">
          <Dialog />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Editable</h3>
        <div :class="cx(css({ bg: 'green.50' }), cardContentClasses)">
          <Editable />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">File Upload</h3>
        <div :class="cx(css({ bg: 'blue.50' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Hover Card</h3>
        <div :class="cx(css({ bg: 'blue.100' }), cardContentClasses)">
          <HoverCard />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Menu</h3>
        <div :class="cx(css({ bg: 'blue.200' }), cardContentClasses)">
          <Menu />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
          Context Menu
        </h3>
        <div :class="cx(css({ bg: 'blue.200' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Nested Menu</h3>
        <div :class="cx(css({ bg: 'blue.100' }), cardContentClasses)">
          <NestedMenu />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
          Number Input
        </h3>
        <div :class="cx(css({ bg: 'blue.50' }), cardContentClasses)">
          <NumberInput />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Pagination</h3>
        <div :class="cx(css({ bg: 'cyan.50' }), cardContentClasses)">
          <Pagination :count="5" :page-size="1" />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Pin Input</h3>
        <div :class="cx(css({ bg: 'cyan.100' }), cardContentClasses)">
          <PinInput />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Popover</h3>
        <div :class="cx(css({ bg: 'cyan.200' }), cardContentClasses)">
          <Popover />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Radio Group</h3>
        <div :class="cx(css({ bg: 'cyan.200' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
          Segmented Control
        </h3>
        <div :class="cx(css({ bg: 'cyan.100' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
          Range Slider
        </h3>
        <div :class="cx(css({ bg: 'cyan.50' }), cardContentClasses)">
          <RangerSlider id="2" />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
          Rating Group
        </h3>
        <div :class="cx(css({ bg: 'orange.50' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Select</h3>
        <div :class="cx(css({ bg: 'orange.100' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Slider</h3>
        <div :class="cx(css({ bg: 'orange.200' }), cardContentClasses)">
          <Slider id="1" />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Switch</h3>
        <div :class="cx(css({ bg: 'orange.200' }), cardContentClasses)">
          <Switch id="1" />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Tabs</h3>
        <div :class="cx(css({ bg: 'orange.100' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Tags Input</h3>
        <div :class="cx(css({ bg: 'orange.50' }), cardContentClasses)">
          <TagsInput />
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Toast</h3>
        <div :class="cx(css({ bg: 'red.50' }), cardContentClasses)">&nbsp;</div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">
          Toggle Group
        </h3>
        <div :class="cx(css({ bg: 'red.100' }), cardContentClasses)">
          &nbsp;
        </div>
      </div>
      <div :class="cardClasses">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">Tooltip</h3>
        <div :class="cx(css({ bg: 'red.200' }), cardContentClasses)">
          <Tooltip />
        </div>
      </div>
    </div>
  </div>
</template>