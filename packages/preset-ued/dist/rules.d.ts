import { Rule, Shortcut, StaticRule } from '@unocss/core';
import { T as Theme } from './shared/preset-ued.a6abe914.js';

/**
 * vertical-aligns
 * (vertical|algin|v)-<verticalAlignAlias>
 * (vertical|algin|v)-<percentage>
 */
declare const verticalAligns: Rule[];
declare const textAligns: Rule[];

declare const uedBorders: Rule[];

/**
 * color calculation
 * color-white color-brand-normal */
declare const color: Rule<Theme>[];
/**
 * background calculation
 * bg-background-white
 */
declare const background: Rule<Theme>[];
declare const colorToken: Rule<Theme>[];
declare const colorInteractionToken: Rule<Theme>[];

declare const rules: Rule<Theme>[];

declare const flex: Rule[];

declare const font: Rule[];
declare const fontWeight: Rule[];
declare const fontTypeMap: Record<string, string[]>;
declare const fontShortcuts: Shortcut[];

declare const gaps: Rule[];

declare const overflows: Rule[];

declare const positions: Rule[];
declare const justifies: StaticRule[];
declare const orders: Rule[];
declare const alignments: StaticRule[];
declare const placements: Rule[];
/**
 * This is to add `flex-` and `grid-` prefix to the alignment rules,
 * supporting `flex="~ items-center"` in attributify mode.
 */
declare const flexGridJustifiesAlignments: StaticRule[];
declare const insets: Rule[];
declare const floats: Rule[];
declare const zIndexes: Rule[];
declare const boxSizing: Rule[];

declare const shadowToken: Rule[];

declare const sizes: Rule<Theme>[];
declare const aspectRatio: Rule[];

declare const paddings: Rule[];
declare const margins: Rule[];

declare const varEmpty = " ";
declare const displays: Rule[];
declare const appearances: Rule[];
declare const cursors: Rule[];
declare const contains: Rule[];
declare const pointerEvents: Rule[];
declare const resizes: Rule[];
declare const userSelects: Rule[];
declare const whitespaces: Rule[];
declare const contentVisibility: Rule[];
declare const contents: Rule[];
declare const breaks: Rule[];
declare const textWraps: Rule[];
declare const textOverflows: Rule[];
declare const textTransforms: Rule[];
declare const fontStyles: Rule[];
declare const fontSmoothings: Rule[];

declare const transformBase: {
    '--un-rotate': number;
    '--un-rotate-x': number;
    '--un-rotate-y': number;
    '--un-rotate-z': number;
    '--un-scale-x': number;
    '--un-scale-y': number;
    '--un-scale-z': number;
    '--un-skew-x': number;
    '--un-skew-y': number;
    '--un-translate-x': number;
    '--un-translate-y': number;
    '--un-translate-z': number;
};
declare const transforms: Rule[];

export { alignments, appearances, aspectRatio, background, boxSizing, breaks, color, colorInteractionToken, colorToken, contains, contentVisibility, contents, cursors, displays, flex, flexGridJustifiesAlignments, floats, font, fontShortcuts, fontSmoothings, fontStyles, fontTypeMap, fontWeight, gaps, insets, justifies, margins, orders, overflows, paddings, placements, pointerEvents, positions, resizes, rules, shadowToken, sizes, textAligns, textOverflows, textTransforms, textWraps, transformBase, transforms, uedBorders, userSelects, varEmpty, verticalAligns, whitespaces, zIndexes };
