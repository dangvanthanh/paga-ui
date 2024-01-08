import { defineSlotRecipe } from '@pandacss/dev'

export const combobox = defineSlotRecipe({
  className: 'combobox',
  slots: ['root', 'label', 'control', 'input', 'trigger', 'content', 'item'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      w: 'full',
    },
    control: {
      pos: 'relative',
    },
    input: {
      pl: 3,
      pr: 6,
      py: 1.5,
      borderRadius: 'sm',
      boxShadow: 'sm',
      w: 'full',
      textStyle: 'sm',
    },
    trigger: {
      pos: 'absolute',
      top: 0,
      right: 1.5,
      bottom: 0,
    },
    content: {
      background: 'white',
      borderRadius: 'sm',
      boxShadow: 'sm',
      display: 'flex',
      flexDirection: 'column',
      _open: {
        animation: 'fadeIn 0.2s ease-in-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-in-out',
        display: 'none',
      },
      _focusVisible: {
        outlineOffset: '2px',
        outline: '2px solid',
        outlineColor: 'gray.900',
      },
    },
    item: {
      w: 'full',
      display: 'flex',
      alignItems: 'center',
      px: 2,
      py: 1,
      cursor: 'pointer',
      textStyle: 'sm',
      transitionDuration: '150ms',
      transitionProperty: 'background-color, color',
      transitionTimingFunction: 'ease-in-out',
      _hover: {
        background: 'gray.200',
      },
      _highlighted: {
        background: 'gray.200',
      },
      _checked: {
        background: 'gray.200',
        cursor: 'default',
        pointerEvents: 'none',
      },
      _disabled: {
        color: 'gray.300',
        cursor: 'default',
        pointerEvents: 'none',
        _hover: {
          bg: 'transparent',
        },
      },
    },
  },
})
