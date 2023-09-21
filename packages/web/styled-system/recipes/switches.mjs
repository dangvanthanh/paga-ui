import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const switchesDefaultVariants = {
  "size": "sm"
}
const switchesCompoundVariants = []

const switchesSlotNames = [
  [
    "root",
    "switch__root"
  ],
  [
    "control",
    "switch__control"
  ],
  [
    "thumb",
    "switch__thumb"
  ],
  [
    "label",
    "switch__label"
  ]
]
const switchesSlotFns = switchesSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, switchesDefaultVariants, getSlotCompoundVariant(switchesCompoundVariants, slotName))])

const switchesFn = (props = {}) => {
  return Object.fromEntries(switchesSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const switchesVariantKeys = [
  "size"
]

export const switches = Object.assign(switchesFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: switchesVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, switchesVariantKeys)
  },
})