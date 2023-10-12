import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const sliderDefaultVariants = {
  "size": "sm"
}
const sliderCompoundVariants = []

const sliderSlotNames = [
  [
    "root",
    "slider__root"
  ],
  [
    "label",
    "slider__label"
  ],
  [
    "control",
    "slider__control"
  ],
  [
    "track",
    "slider__track"
  ],
  [
    "range",
    "slider__range"
  ],
  [
    "thumb",
    "slider__thumb"
  ],
  [
    "output",
    "slider__output"
  ]
]
const sliderSlotFns = /* @__PURE__ */ sliderSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, sliderDefaultVariants, getSlotCompoundVariant(sliderCompoundVariants, slotName))])

const sliderFn = (props = {}) => {
  return Object.fromEntries(sliderSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const sliderVariantKeys = [
  "size"
]

export const slider = /* @__PURE__ */ Object.assign(sliderFn, {
  __recipe__: false,
  __name__: 'slider',
  raw: (props) => props,
  variantKeys: sliderVariantKeys,
  variantMap: {
  "size": [
    "sm"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, sliderVariantKeys)
  },
})