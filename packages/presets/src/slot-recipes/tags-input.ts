import { defineSlotRecipe } from '@pandacss/dev'

export const tagsInput = defineSlotRecipe({
  className: 'tagsInput',
  slots: ['root', 'label', 'control', 'tag', 'input'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      w: 'full',
    },
    label: {
      display: 'none',
    },
    control: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      borderWidth: '1px',
      borderRadius: 'sm',
      borderColor: 'gray.300',
      outline: 'none',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, box-shadow',
      transitionTimingFunction: 'default',
      p: 1.5,
      gap: 1,
      _focusWithin: {
        borderColor: 'gray.900',
        boxShadow: 'sm',
      },
    },
    input: {
      outline: 'none',
      background: 'transparent',
    },
    tag: {
      borderColor: 'gray.300',
      borderWidth: '1px',
      borderRadius: 'sm',
      color: 'gray.900',
      background: 'gray.100',
      fontWeight: '500',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1,
      px: 1.5,
      _highlighted: {
        borderColor: 'gray.400',
      },
      _hidden: {
        display: 'none',
      },
    },
  },
})
