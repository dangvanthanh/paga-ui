import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const paginationDefaultVariants = {}
const paginationCompoundVariants = []

const paginationSlotNames = [
  [
    "root",
    "pagination__root"
  ],
  [
    "item",
    "pagination__item"
  ],
  [
    "ellipsis",
    "pagination__ellipsis"
  ],
  [
    "prev-trigger",
    "pagination__prev-trigger"
  ],
  [
    "next-trigger",
    "pagination__next-trigger"
  ]
]
const paginationSlotFns = /* @__PURE__ */ paginationSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, paginationDefaultVariants, getSlotCompoundVariant(paginationCompoundVariants, slotName))])

const paginationFn = (props = {}) => {
  return Object.fromEntries(paginationSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const paginationVariantKeys = []

export const pagination = /* @__PURE__ */ Object.assign(paginationFn, {
  __recipe__: false,
  __name__: 'pagination',
  raw: (props) => props,
  variantKeys: paginationVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, paginationVariantKeys)
  },
})