import { defineSlotRecipe } from '@pandacss/dev';

export const progressCircular = defineSlotRecipe({
  className: 'progressCircular',
  slots: ['root', 'circle', 'circleRange', 'circleTrack'],
  base: {
    root: { display: 'flex', alignItems: 'center', w: 20, h: 20 },
    circleRange: {
      background: 'gray.800',
      h: 'full',
    },
    circleTrack: {
      borderWidth: '1px',
      overflow: 'hidden',
      w: 'full',
      h: 'full',
    },
  },
});
