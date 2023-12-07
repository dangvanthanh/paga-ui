import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Paga UI',
    sidebar: [
      {
        label: 'Overview',
        items: [
          {
            label: 'Introduction',
            link: '/overview/introduction'
          },
          {
            label: 'Getting Started',
            link: '/overview/getting-started'
          }]
      },
      {
        label: 'Components',
        items: [
          {
            label: 'Accordion',
            link: '/components/accordion'
          },
          {
            label: 'Avatar',
            link: '/components/avatar'
          },
          {
            label: 'Checkbox',
            link: '/components/checkbox'
          },
          {
            label: 'Color Picker',
            link: '/components/color-picker'
          },
          {
            label: 'Combobox',
            link: '/components/combobox'
          },
          {
            label: 'Context Menu',
            link: '/components/context-menu'
          },
          {
            label: 'Dialog',
            link: '/components/dialog'
          },
          {
            label: 'Ediable',
            link: '/components/editable'
          },
          {
            label: 'File Upload',
            link: '/components/file-upload'
          },
          {
            label: 'Hover Card',
            link: '/components/hover-card'
          },
          {
            label: 'Menu',
            link: '/components/menu'
          },
          {
            label: 'Nested Menu',
            link: '/components/nested-menu'
          },
          {
            label: 'Pagination',
            link: '/components/pagination'
          },
          {
            label: 'Number Input',
            link: '/components/number-input'
          },
          {
            label: 'Popover',
            link: '/components/popover'
          },
          {
            label: 'Radio Group',
            link: '/components/radio-group'
          },
          {
            label: 'Range Slider',
            link: '/components/range-slider'
          },
          {
            label: 'Rating Group',
            link: '/components/rating-group'
          },
          {
            label: 'Segmented Control',
            link: '/components/segmented-control'
          },
          {
            label: 'Select',
            link: '/components/select'
          },
          {
            label: 'Slider',
            link: '/components/slider'
          },
          {
            label: 'Switch',
            link: '/components/switch'
          },
          {
            label: 'Tabs',
            link: '/components/tabs'
          },
          {
            label: 'Tags Input',
            link: '/components/tags-input'
          },
          {
            label: 'Toast',
            link: '/components/toast'
          },
          {
            label: 'Toggle Group',
            link: '/components/toggle-group'
          },
          {
            label: 'Tooltip',
            link: '/components/tooltip'
          },
        ]
      }
    ]
  })]
});