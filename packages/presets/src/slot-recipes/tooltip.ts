import { defineSlotRecipe } from '@pandacss/dev';

export const tooltip = defineSlotRecipe({
  className: 'tooltip',
  slots: ['content', 'arrow', 'trigger'],
  base: {
    content: {
      background: 'gray.900',
      color: 'white',
      fontWeight: '500',
      px: 3,
      py: 1,
      textStyle: 'sm',
      boxShadow: 'sm',
      borderRadius: 'sm',
      _open: {
        animation: 'fade-in 0.25s ease-out',
      },
      _closed: {
        animation: 'fade-out 0.2s ease-out',
      },
    }
  }
});