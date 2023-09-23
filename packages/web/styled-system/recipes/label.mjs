import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const labelFn = createRecipe('label', {
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
export const label = Object.assign(labelFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: labelVariantKeys,
  variantMap: labelVariantMap,
  splitVariantProps(props) {
    return splitProps(props, labelVariantKeys)
  },
})