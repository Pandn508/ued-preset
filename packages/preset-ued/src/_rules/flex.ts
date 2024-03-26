import type { Rule } from '@unocss/core'
// import type { Theme } from '@unocss/preset-mini'
import { h } from '../utils'

export const flex: Rule[] = [
  // display
  ['flex', { display: 'flex' }],
  ['inline-flex', { display: 'inline-flex' }],
  // ['flex-inline', { display: 'inline-flex' }],

  // flex
  ['flex-1', { flex: '1 1 0%' }],
  ['flex-auto', {flex: '1 1 auto'}],
  ['flex-initial', { flex: '0 1 auto' }],
  ['flex-none', { flex: 'none' }],

  // shrink/frow/basis
  
  // directions
  ['flex-row', {'flex-direaction': 'row'}],
  ['flex-row-reverse', {'flex-direaction': 'row-reverse'}],
  ['flex-col', {'flex-direction': 'column'}],
  ['flex-col-recerse', {'flex-direction': 'column-rverse'}],

  // wraps
  ['flex-wrap', { 'flex-wrap': 'wrap' }],
  ['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],
  ['flex-nowrap', { 'flex-wrap': 'nowrap' }],
]