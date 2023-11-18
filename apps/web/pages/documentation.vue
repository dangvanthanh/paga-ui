<script setup lang="ts">
import { shallowRef, resolveComponent } from 'vue';
import { flex, grid } from '~/styled-system/patterns';
import { css, cx } from '~/styled-system/css';

const cardClasses = css({
  border: '1px solid',
  borderColor: 'gray.100',
  boxShadow: 'sm',
  p: '4',
  borderRadius: 'lg',
});

const cardContentClasses = flex({
  mt: 6,
  borderRadius: 'lg',
  h: 32,
  align: 'center',
  justify: 'center',
  p: 6,
});

const components = shallowRef([
  { name: 'Accordion', showcase: resolveComponent('Accordion') },
  { name: 'Avatar', showcase: resolveComponent('Avatar') },
  { name: 'Checkbox', showcase: resolveComponent('Checkbox') },
  { name: 'Color Picker', showcase: resolveComponent('ColorPicker') },
  { name: 'Combobox', showcase: resolveComponent('Combobox') },
  { name: 'Dialog', showcase: resolveComponent('Dialog') },
  { name: 'Editable', showcase: resolveComponent('Editable') },
  { name: 'File Upload', showcase: resolveComponent('FileUpload') },
  { name: 'Hover Card', showcase: resolveComponent('HoverCard') },
  { name: 'Menu', showcase: resolveComponent('Menu') },
  { name: 'Context Menu', showcase: resolveComponent('ContextMenu') },
  { name: 'Nested Menu', showcase: resolveComponent('NestedMenu') },
  { name: 'Number Input', showcase: resolveComponent('NumberInput') },
  { name: 'Pagination', showcase: resolveComponent('Pagination') },
  { name: 'Pin Input', showcase: resolveComponent('PinInput') },
  { name: 'Popover', showcase: resolveComponent('Popover') },
  { name: 'Radio Group', showcase: resolveComponent('RadioGroup') },
  { name: 'Segmented Control', showcase: resolveComponent('SegmentedControl') },
  { name: 'Range Slider', showcase: resolveComponent('RangerSlider') },
  { name: 'Rating Group', showcase: resolveComponent('RatingGroup') },
  { name: 'Select', showcase: resolveComponent('Select') },
  { name: 'Slider', showcase: resolveComponent('Slider') },
  { name: 'Switch', showcase: resolveComponent('Switch') },
  { name: 'Tabs', showcase: resolveComponent('Tabs') },
  { name: 'Tags Input', showcase: resolveComponent('TagsInput') },
  { name: 'Toast', showcase: resolveComponent('Toast') },
  { name: 'Toggle Group', showcase: resolveComponent('ToggleGroup') },
  { name: 'Tooltip', showcase: resolveComponent('Tooltip') },
])
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
      <div :class="cardClasses" v-for="component in components">
        <h3 :class="css({ fontSize: 'lg', fontWeight: '600' })">{{ component.name }}</h3>
        <div :class="cx(css({ bg: 'gray.50' }), cardContentClasses)">
          <component :is="component.showcase" />
        </div>
      </div>
    </div>
  </div>
</template>