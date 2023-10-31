import { defineSlotRecipe } from '@pandacss/dev';

export const editable = defineSlotRecipe({
  className: 'editable',
  slots: ['root', 'area', 'input'],
  base: {
    root: { display: 'flex', alignItems: 'center', w: 'full' },
    area: { w: 'full' },
    input: {
      w: 'full',
      appearance: 'none',
      background: 'white',
      borderColor: 'gray.300',
      borderRadius: 'sm',
      borderWidth: '1px',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'box-shadow, border-color',
      transitionTimingFunction: 'default',
      px: 3.5,
      h: 9,
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _focus: {
        borderColor: 'gray.800',
        boxShadow: 'sm',
      },
    },
  },
});
