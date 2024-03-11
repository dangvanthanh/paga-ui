import { defineSlotRecipe } from '@pandacss/dev'

export const carousel = defineSlotRecipe({
  className: 'carousel',
  slots: ['root', 'viewport', 'item', 'prevTrigger', 'nextTrigger', 'indicatorGroup', 'indicator'],
  base: {},
})
