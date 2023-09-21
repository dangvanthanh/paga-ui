import { css } from '../css/css.mjs';
import { assertCompoundVariant, getCompoundVariantCss } from '../css/cva.mjs';
import { cx } from '../css/cx.mjs';
import { compact, createCss, withoutSpace } from '../helpers.mjs';

export const createRecipe = (name, defaultVariants, compoundVariants) => {
  return (variants) => {
   const transform = (prop, value) => {
     assertCompoundVariant(name, compoundVariants, variants, prop)

      if (value === '__ignore__') {
        return { className: name }
      }

      value = withoutSpace(value)
      return { className: `${name}--${prop}_${value}` }
   }

   const recipeCss = createCss({
     
     utility: {
       
       transform,
     }
   })

   const recipeStyles = {
     [name]: '__ignore__',
     ...defaultVariants,
     ...compact(variants),
   }

   const compoundVariantStyles = getCompoundVariantCss(compoundVariants, recipeStyles)

   return cx(recipeCss(recipeStyles), css(compoundVariantStyles))
  }
}