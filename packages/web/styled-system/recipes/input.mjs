import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const inputFn = createRecipe('input', {
  "size": "md"
}, [])

const inputVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
}
const inputVariantKeys = Object.keys(inputVariantMap)
export const input = Object.assign(inputFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: inputVariantKeys,
  variantMap: inputVariantMap,
  splitVariantProps(props) {
    return splitProps(props, inputVariantKeys)
  },
})