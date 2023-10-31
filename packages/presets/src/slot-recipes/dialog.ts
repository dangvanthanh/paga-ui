import { defineSlotRecipe } from '@pandacss/dev';

export const dialog = defineSlotRecipe({
  className: 'dialog',
  slots: ['root', 'trigger', 'backdrop', 'positioner', 'content', 'title', 'description', 'closeTrigger'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      inset: 0,
      position: 'fixed',
      zIndex: 100,
    },
    backdrop: {
      backdropFilter: 'blur(2px)',
      background: 'gray.700',
      inset: 0,
      position: 'fixed',
      zIndex: 101,
      opacity: 0.75,
      _open: {
        animation: 'backdropIn',
      },
      _closed: {
        animation: 'backdropOut',
      },
    },
    content: {
      background: 'white',
      borderRadius: 'sm',
      boxShadow: 'sm',
      minW: 'sm',
      position: 'relative',
      p: 3,
      zIndex: 102,
      _open: {
        animation: 'dialogIn',
      },
      _closed: {
        animation: 'dialogOut',
      },
    },
    title: {
      fontWeight: 600,
      textStyle: 'lg',
    },
    description: {
      color: 'gray.500',
      textStyle: 'sm',
    },
    closeTrigger: {
      position: 'absolute',
      top: 0,
      right: 2,
      cursor: 'pointer',
    },
  },
});
