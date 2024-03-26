import type { Rule, RuleContext, CSSObject } from '@unocss/core';
import type { Theme } from '../_theme'

/**
 * color calculation
 * color-white color-brand-normal */
export const color: Rule<Theme>[] = [
  [/^color-(\w+)(?:-(.*))?$/, ([, c, i]: string[], { theme }: RuleContext<Theme>): CSSObject | undefined => {
    const css: CSSObject = {}
    const colors = theme.colors!
    if (i) {
      let obj = colors[c]
      if (obj && typeof obj !== 'string') {
        css['color'] = obj[i] as string
      }
    } else {
      css['color'] = (typeof colors[c] === 'string' ? colors[c] : (colors[c] as Record<string, string>).normal) as string
    }
    return css
  }, {}]
]

/**
 * background calculation
 * bg-background-white
 */
export const background: Rule<Theme>[] = [
  [/^(?:bg-background)-(\w+)(?:-(.*))?$/, ([, c, i]: string[], { theme }: RuleContext<Theme>): CSSObject | undefined => {
    const css: CSSObject = {}
    const colors = theme.colors!
    if (i) {
      let obj = colors[c]
      if (obj && typeof obj !== 'string') {
        css['background'] = obj[i] as string
      }
    } else {
      css['background'] = (typeof colors[c] === 'string' ? colors[c] : (colors[c] as Record<string, string>).normal) as string
    }
    return css
  }, {}]
]

/* global color token */
export const colorToken: Rule<Theme>[] = [
  /* page bg */          
  [/color-bg-page/, ([], { theme }) => ({background: theme.colors?.gray[1]})],
  /* main container bg */ 
  [/color-bg-container/, ([], { theme }) => ({background: theme.colors!.white as string})],
  /* secondary container bg */
  [/color-bg-secondarycontainer/, ([], { theme }) => ({background: theme.colors!.gray[1]})],
  /* component(third) bg */
  [/color-bg-component/, ([], { theme }) => ({background: theme.colors!.white as string})],
  /* default dividing */ 
  [/color-component-border/, ([], { theme }) => ({background: theme.colors!.gray[3]})],
  /* default border */ 
  [/color-component-border/, ([], { theme }) => ({background: theme.colors!.gray[4]})],
]
/* global color interaction token */
export const colorInteractionToken: Rule<Theme>[] = [
  /* secondary container */ 
  [/color-bg-secondarycontainer-hover/, ([], { theme }) => ({background: theme.colors!.gray[2]})],
  [/color-bg-secondarycontainer-active/, ([], { theme }) => ({background: theme.colors!.gray[4]})],
  /* component(third) bg */
  [/color-bg-component-hover/, ([], { theme }) => ({background: theme.colors!.gray[1]})],
  [/color-bg-component-actice/, ([], { theme }) => ({background: theme.colors!.gray[3]})],
  [/color-bg-component-disabled/, ([], { theme }) => ({background: theme.colors!.gray[2]})],
]
/* text color */
/* theme & operation color */
