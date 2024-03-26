import type { Rule, Shortcut, CSSObject } from '@unocss/core';

export const font: Rule[] = [
  [/^font-(size)-(.+)$/, handleText, { autocomplete: 'text-size-(1600|1200|900|700|600|500|400|350|300)'}],
  [/^font-(lh)-(.+)$/, handleText, { autocomplete: 'font-line-height-(1800|1400|1100|900|800|700|600|550|500)'}]
]

export const fontWeight: Rule[] = [
  ['font-weight-regular', {'font-weight': 400}],
  ['font-weight-bold', {'font-weight': 700}],
]

function unitNum (str: string) {
  const numberWithUnitRE = /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i
  const match = str.match(numberWithUnitRE)
  if (!match) return
  const [, n, unit] = match
  const num = Number.parseFloat(n)
  if (!Number.isNaN(num)) {
    if (num === 0) return '0'
    if (num < 100) return unit ? `${num }${unit}` : `${num / 4}rem`
    else return unit ? `${num / 25}${unit}` : `${num / 100}rem`
  }
}

function handleText([, d, s]: string[]/*, { theme }: RuleContext<Theme> */): CSSObject | undefined {
  const v = unitNum(s)
  if (v != null) {
    return {
      [`font-${d === 'lh' ? 'line-height' : 'size'}`]: v
    }
  }
}

export const fontTypeMap: Record<string, string[]> = {
  'headline-large': ['900', 'bold', '1100'],
  'headline-medium': ['700', 'bold', '900'],
  'headline-small': ['600', 'bold', '800'],
  'title-large': ['600', 'bold', '800'],
  'title-medium': ['500', 'bold', '700'],
  'title-small': ['350', 'bold', '550'],
  'body-large': ['400', 'regular', '600'],
  'body-medium': ['350', 'regular', '550'],
  'body-small': ['300', 'regular', '500'],
  'mark-medium': ['350', 'bold', '550'],
  'mark-small': ['300', 'bold', '500'],
  'link-large': ['400', 'regular', '600'],
  'link-medium': ['350', 'regular', '550'],
  'link-small': ['300', 'regular', '500'],
}

enum fontEnum {
  'size',
  'weight',
  'line-height' 
}

export const fontShortcuts: Shortcut[] = [
  [/^font-(.+)$/, ([, s]) => {
    if (s && fontTypeMap[s])
    return fontTypeMap[s].map((value, index) => `font-${fontEnum[index]}-${value}`).join(' ')
  }]
]
