import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: '0', transform: 'translateY(-4px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  fadeOut: {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(-4px)' },
  },
  backdropIn: {
    '0%': { opacity: '0.7', transform: 'translateY(-160px) scale(.7)' },
    '80%': { opacity: '0.7', transform: 'translateY(0) scale(.7)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  backdropOut: {
    '0%': { opacity: '1', transform: 'scale(1)' },
    '20%': { opacity: '0.7', transform: 'translateY(0) scale(.7)' },
    '100%': { opacity: '0.7', transform: 'translateY(160px) scale(.7)' },
  },
  dialogIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  dialogOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
})
