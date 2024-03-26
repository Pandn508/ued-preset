import type { Rule } from "@unocss/core";
import type { Theme } from '../_theme'
import { color, background, colorToken, colorInteractionToken } from './colors'
import { verticalAligns, textAligns } from './align'
import { flex } from './flex'
import { font, fontWeight } from './font'
import { gaps } from './gap'
import { overflows } from './layout'
import { positions, justifies, orders, alignments, placements, flexGridJustifiesAlignments, floats, insets, zIndexes, boxSizing } from './position'
import { shadowToken } from './shadow'
import { sizes, aspectRatio } from './size'
import { paddings, margins } from './spacing'
import { displays, appearances, cursors, contains, pointerEvents, resizes, userSelects, whitespaces, contentVisibility, contents, breaks, textWraps, textOverflows, textTransforms, fontStyles, fontSmoothings } from './static'
import { transforms } from './transform'
export const rules: Rule<Theme>[] = [
  color,
  background,
  colorToken,
  colorInteractionToken,
  verticalAligns,
  textAligns,
  flex,
  font,
  fontWeight,
  gaps,
  overflows,
  positions,
  justifies, 
  orders, 
  alignments, 
  placements, 
  flexGridJustifiesAlignments, 
  floats, 
  insets, 
  zIndexes, 
  boxSizing,
  shadowToken,
  sizes,
  aspectRatio,
  paddings,
  margins,
  displays, 
  appearances, 
  cursors, 
  contains, 
  pointerEvents, 
  resizes, 
  userSelects, 
  whitespaces, 
  contentVisibility, 
  contents, 
  breaks, 
  textWraps, 
  textOverflows, 
  textTransforms, 
  fontStyles, 
  fontSmoothings,
  transforms
].flat(1)