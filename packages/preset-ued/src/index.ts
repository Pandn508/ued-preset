import { definePreset } from "@unocss/core";
import type { Postprocessor, Preflight, PreflightContext, PresetOptions } from '@unocss/core'
import { theme } from './theme'
import { rules } from './rules'
import { variants } from './variants'



export interface PresetMiniOptions extends PresetOptions {
  /**
   * Dark mode options
   *
   * @default 'class'
   */
  /**
   * Generate tagged pseudo selector as `[group=""]` instead of `.group`
   *
   * @default false
   */
  attributifyPseudo?: boolean
  /**
   * Prefix for CSS variables.
   *
   * @default 'un-'
   */
  variablePrefix?: string
  /**
   * Utils prefix. When using tagged pseudo selector, only the first truthy prefix will be used.
   *
   * @default undefined
   */
  prefix?: string | string[]
  /**
   * Generate preflight
   *
   * @default true
   */
  preflight?: boolean

  /**
   * Enable arbitrary variants, for example `<div class="[&>*]:m-1 [&[open]]:p-2"></div>`.
   *
   * Disable this might slightly improve the performance.
   *
   * @default true
   */
  arbitraryVariants?: boolean
}

export const presetUed = definePreset((options: PresetMiniOptions = {}) => {
  options.attributifyPseudo = options.attributifyPseudo ?? false
  options.preflight = options.preflight ?? true
  options.variablePrefix = options.variablePrefix ?? 'un-'
  return {
    name: 'presetUed',
    theme,
    rules,
    // variants: variants(options),
    options,
    prefix: options.prefix,
    // postprocess: VarPrefixPostprocessor(options.variablePrefix),
    // preflights: options.preflight
    //   ? normalizePreflights(preflights, options.variablePrefix)
    //   : [],
    // extractorDefault: options.arbitraryVariants === false
    //   ? undefined
    //   : extractorArbitraryVariants,
    // autocomplete: {
    //   shorthands,
    // },
  }
})