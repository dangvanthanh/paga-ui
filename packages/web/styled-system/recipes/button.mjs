import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonFn = createRecipe('button', {
  "variant": "primary",
  "size": "sm"
}, [])

const buttonVariantMap = {
  "variant": [
    "primary",
    "ghost"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
}
const buttonVariantKeys = Object.keys(buttonVariantMap)
export const button = Object.assign(buttonFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})