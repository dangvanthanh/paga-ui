import { defineSlotRecipe } from '@pandacss/dev'

export const ratingGroup = defineSlotRecipe({
  className: 'ratingGroup',
  slots: ['root', 'control', 'rating'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    control: {
      display: 'flex',
      alignItems: 'center',
    },
    rating: {
      outline: 'none',
      cursor: 'pointer',
      color: 'gray.300',
      fill: 'gray.300',
      _highlighted: {
        color: 'gray.900',
        fill: 'gray.900',
      },
    },
  },
})
