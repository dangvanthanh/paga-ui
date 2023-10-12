import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const labelFn = /* @__PURE__ */ createRecipe('label', {
  "size": "md"
}, [])

const labelVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
}

const labelVariantKeys = Object.keys(labelVariantMap)

export const label = /* @__PURE__ */ Object.assign(labelFn, {
  __recipe__: true,
  __name__: 'label',
  raw: (props) => props,
  variantKeys: labelVariantKeys,
  variantMap: labelVariantMap,
  splitVariantProps(props) {
    return splitProps(props, labelVariantKeys)
  },
})