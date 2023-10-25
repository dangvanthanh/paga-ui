import { defineSlotRecipe } from '@pandacss/dev';

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  slots: ['root', 'control', 'label'],
  base: {
    root: { display: 'flex', alignItems: 'center', gap: 2 },
    control: {
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: '1px',
      borderColor: 'gray.300',
      cursor: 'pointer',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, background',
      transitionTimingFunction: 'default',
      w: 5,
      h: 5,
      borderRadius: 'sm',
      _hover: {
        background: 'gray.50',
      },
      _checked: {
        background: 'grey.200',
        borderColor: 'gray.300',
        _hover: {
          background: 'gray.50',
        },
      },
    },
    label: { color: 'gray.700', fontWeight: 500, textStyle: 'sm' },
  }
});
