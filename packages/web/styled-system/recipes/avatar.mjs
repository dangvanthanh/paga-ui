import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const avatarDefaultVariants = {
  "size": "sm"
}
const avatarCompoundVariants = []

const avatarSlotNames = [
  [
    "root",
    "avatar__root"
  ],
  [
    "image",
    "avatar__image"
  ],
  [
    "fallback",
    "avatar__fallback"
  ]
]
const avatarSlotFns = avatarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, avatarDefaultVariants, getSlotCompoundVariant(avatarCompoundVariants, slotName))])

const avatarFn = (props = {}) => {
  return Object.fromEntries(avatarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const avatarVariantKeys = [
  "size"
]

export const avatar = Object.assign(avatarFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: avatarVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, avatarVariantKeys)
  },
})