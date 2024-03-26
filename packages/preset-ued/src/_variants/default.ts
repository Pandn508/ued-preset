import type { Variant } from '@unocss/core'
import type { Theme } from '../theme'
import { variantBreakpoints } from './breakpoints'
import { variantCombinators } from './combinators'
import { variantLanguageDirections } from './directions'
import { variantCssLayer, variantInternalLayer, variantScope, variantSelector, variantVariables } from './misc'
import { variantNegative } from './negative'
import { variantImportant } from './important'
import { variantCustomMedia, variantPrint } from './media'
import { variantSupports } from './supports'
import { variantPartClasses, variantPseudoClassFunctions, variantPseudoClassesAndElements } from './pseudo'
import { variantAria } from './aria'
import { variantDataAttribute, variantTaggedDataAttributes } from './data'
import { variantContainerQuery } from './container'

export function variants(): Variant<Theme>[] {
  return [
    variantAria,
    variantDataAttribute,
    variantCssLayer,

    variantSelector,
    variantInternalLayer,
    variantNegative,
    variantImportant(),
    variantSupports,
    variantPrint,
    variantCustomMedia,
    variantBreakpoints(),
    ...variantCombinators,

    variantPseudoClassesAndElements(),
    variantPseudoClassFunctions(),

    variantPartClasses,
    ...variantLanguageDirections,
    variantScope,

    variantContainerQuery,
    variantVariables,
    ...variantTaggedDataAttributes,
  ]
}
