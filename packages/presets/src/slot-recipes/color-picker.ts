import { defineSlotRecipe } from '@pandacss/dev';

var thumb = {
  borderRadius: '2xl',
  h: 3,
  w: 3,
  outline: 'none',
  transform: 'translate(-50%,-50%)',
  boxShadow: '0 0 0 1px white, 0 0 0 2px white inset',
}

export const colorPicker = defineSlotRecipe({
  className: 'colorPicker',
  slots: [
    'root',
    'trigger',
    'transparencyGrid',
    'swatch',
    'input',
    'control',
    'content',
    'area',
    'areaBackground',
    'areaThumb',
    'channelSlider',
    'channelSliderTrack',
    'channelSliderThumb',
    'swatchGroup'
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    transparencyGrid: {
      borderRadius: 'sm',
    },
    swatch: {
      w: 9,
      h: 9,
      borderRadius: 'sm',
    },
    input: {
      borderColor: 'gray.300',
      borderWidth: '1px',
      borderRadius: 'sm',
      py: 1.5,
      px: 3,
      h: 9,
    },
    control: {
      display: 'flex',
      flexDirection: 'row',
      gap: 2,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      borderRadius: 'sm',
      boxShadow: 'sm',
      minW: 'xs',
      p: 3,
      gap: 3,
      _open: {
        animation: 'fadeIn 0.2s ease-in-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-in-out',
        display: 'none',
      },
    },
    area: {
      height: 36,
      borderRadius: 'sm',
      overflow: 'hidden',
    },
    areaBackground: {
      h: 'full',
    },
    areaThumb: {
      ...thumb
    },
    channelSlider: {
      borderRadius: 'sm',
    },
    channelSliderTrack: {
      borderRadius: 'sm',
      h: 3,
    },
    channelSliderThumb: {
      ...thumb
    },
    swatchGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 2,
    }
  },
});