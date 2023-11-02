import { defineSlotRecipe } from '@pandacss/dev';

export const menu = defineSlotRecipe({
  className: 'menu',
  slots: ['trigger', 'content', 'item', 'optionItem', 'arrow'],
  base: {
    trigger: {
      outline: 'none',
      textStyle: 'sm'
    },
    content: {
      bg: 'white',
      borderRadius: 'sm',
      boxShadow: 'sm',
      display: 'flex',
      flexDirection: 'column',
      outline: 'none',
      py: 1,
      gap: 1,
      width: 'calc(100% + 2rem)',
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
        visibility: 'hidden'
      },
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textStyle: 'sm',
      h: 8,
      px: 1.5,
      mx: 1,
    },
    optionItem: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textStyle: 'sm',
      h: 8,
      px: 1.5,
      mx: 1,
    },
    arrow: {
      '--arrow-size': '12px',
      '--background-color': 'white',
    },
  },
});
