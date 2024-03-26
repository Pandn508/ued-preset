import { g as globalKeywords, h, m as makeGlobalStaticRules, i as insetMap, r as resolveBreakpoints, a as directionSize, p as positionMap, x as xyzMap } from './preset-ued.cf91fee8.mjs';

const verticalAlignAlias = {
  "mid": "middle",
  "base": "baseline",
  "btm": "bottom",
  "baseline": "baseline",
  "top": "top",
  "start": "top",
  "middle": "middle",
  "bottom": "bottom",
  "end": "bottom",
  "text-top": "text-top",
  "text-bottom": "text-bottom",
  "sub": "sub",
  "super": "super",
  ...Object.fromEntries(globalKeywords.map((x) => [x, x]))
};
const verticalAligns = [
  [
    /^(?:vertical|align|v)-([-\w]+%)$/,
    ([, v]) => ({ "vertical-align": verticalAlignAlias[v] ?? h.numberWithUnit(v) }),
    {
      autocomplete: [
        `(vertical|algin|v)-(${Object.keys(verticalAlignAlias).join("|")})`,
        `(vertical|algin|v)-<percentage>`
      ]
    }
  ]
];
const textAligns = ["center", "left", "right", "justify", "start", "end"].map((v) => [`text-${v}`, { "text-aligin": v }]);

const color = [
  [/^color-(\w+)(?:-(.*))?$/, ([, c, i], { theme }) => {
    const css = {};
    const colors = theme.colors;
    if (i) {
      let obj = colors[c];
      if (obj && typeof obj !== "string") {
        css["color"] = obj[i];
      }
    } else {
      css["color"] = typeof colors[c] === "string" ? colors[c] : colors[c].normal;
    }
    return css;
  }, {}]
];
const background = [
  [/^(?:bg-background)-(\w+)(?:-(.*))?$/, ([, c, i], { theme }) => {
    const css = {};
    const colors = theme.colors;
    if (i) {
      let obj = colors[c];
      if (obj && typeof obj !== "string") {
        css["background"] = obj[i];
      }
    } else {
      css["background"] = typeof colors[c] === "string" ? colors[c] : colors[c].normal;
    }
    return css;
  }, {}]
];
const colorToken = [
  /* page bg */
  [/color-bg-page/, ([], { theme }) => ({ background: theme.colors?.gray[1] })],
  /* main container bg */
  [/color-bg-container/, ([], { theme }) => ({ background: theme.colors.white })],
  /* secondary container bg */
  [/color-bg-secondarycontainer/, ([], { theme }) => ({ background: theme.colors.gray[1] })],
  /* component(third) bg */
  [/color-bg-component/, ([], { theme }) => ({ background: theme.colors.white })],
  /* default dividing */
  [/color-component-border/, ([], { theme }) => ({ background: theme.colors.gray[3] })],
  /* default border */
  [/color-component-border/, ([], { theme }) => ({ background: theme.colors.gray[4] })]
];
const colorInteractionToken = [
  /* secondary container */
  [/color-bg-secondarycontainer-hover/, ([], { theme }) => ({ background: theme.colors.gray[2] })],
  [/color-bg-secondarycontainer-active/, ([], { theme }) => ({ background: theme.colors.gray[4] })],
  /* component(third) bg */
  [/color-bg-component-hover/, ([], { theme }) => ({ background: theme.colors.gray[1] })],
  [/color-bg-component-actice/, ([], { theme }) => ({ background: theme.colors.gray[3] })],
  [/color-bg-component-disabled/, ([], { theme }) => ({ background: theme.colors.gray[2] })]
];

const flex = [
  // display
  ["flex", { display: "flex" }],
  ["inline-flex", { display: "inline-flex" }],
  // ['flex-inline', { display: 'inline-flex' }],
  // flex
  ["flex-1", { flex: "1 1 0%" }],
  ["flex-auto", { flex: "1 1 auto" }],
  ["flex-initial", { flex: "0 1 auto" }],
  ["flex-none", { flex: "none" }],
  // shrink/frow/basis
  // directions
  ["flex-row", { "flex-direaction": "row" }],
  ["flex-row-reverse", { "flex-direaction": "row-reverse" }],
  ["flex-col", { "flex-direction": "column" }],
  ["flex-col-recerse", { "flex-direction": "column-rverse" }],
  // wraps
  ["flex-wrap", { "flex-wrap": "wrap" }],
  ["flex-wrap-reverse", { "flex-wrap": "wrap-reverse" }],
  ["flex-nowrap", { "flex-wrap": "nowrap" }]
];

const font = [
  [/^font-(size)-(.+)$/, handleText, { autocomplete: "text-size-(1600|1200|900|700|600|500|400|350|300)" }],
  [/^font-(lh)-(.+)$/, handleText, { autocomplete: "font-line-height-(1800|1400|1100|900|800|700|600|550|500)" }]
];
const fontWeight = [
  ["font-weight-regular", { "font-weight": 400 }],
  ["font-weight-bold", { "font-weight": 700 }]
];
function unitNum(str) {
  const numberWithUnitRE = /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i;
  const match = str.match(numberWithUnitRE);
  if (!match)
    return;
  const [, n, unit] = match;
  const num = Number.parseFloat(n);
  if (!Number.isNaN(num)) {
    console.log("\u2728 ~ file: font.ts:20 ~ num:", num);
    if (num === 0)
      return "0";
    return unit ? `${num / 25}${unit}` : `${num / 100}rem`;
  }
}
function handleText([, d, s]) {
  const v = unitNum(s);
  if (v != null) {
    return {
      [`font-${d === "lh" ? "line-height" : "size"}`]: v
    };
  }
}
const fontTypeMap = {
  "headline-large": ["900", "bold", "1100"],
  "headline-medium": ["700", "bold", "900"],
  "headline-small": ["600", "bold", "800"],
  "title-large": ["600", "bold", "800"],
  "title-medium": ["500", "bold", "700"],
  "title-small": ["350", "bold", "550"],
  "body-large": ["400", "regular", "600"],
  "body-medium": ["350", "regular", "550"],
  "body-small": ["300", "regular", "500"],
  "mark-medium": ["350", "bold", "550"],
  "mark-small": ["300", "bold", "500"],
  "link-large": ["400", "regular", "600"],
  "link-medium": ["350", "regular", "550"],
  "link-small": ["300", "regular", "500"]
};
var fontEnum = /* @__PURE__ */ ((fontEnum2) => {
  fontEnum2[fontEnum2["size"] = 0] = "size";
  fontEnum2[fontEnum2["weight"] = 1] = "weight";
  fontEnum2[fontEnum2["line-height"] = 2] = "line-height";
  return fontEnum2;
})(fontEnum || {});
const fontShortcuts = [
  [/^font-(.+)$/, ([, s]) => {
    if (s && fontTypeMap[s])
      return fontTypeMap[s].map((value, index) => `font-${fontEnum[index]}-${value}`).join(" ");
  }]
];

const directions = {
  "": "",
  "x": "column-",
  "y": "row-",
  "col": "column-",
  "row": "row-"
};
function handleGap([, d = "", s], { theme }) {
  const v = theme.spacing?.[s] ?? h.bracket.cssvar.global.rem(s);
  if (v != null) {
    return {
      [`${directions[d]}gap`]: v
    };
  }
}
const gaps = [
  [/^(?:flex-|grid-)?gap-?()(.+)$/, handleGap, { autocomplete: ["gap-$spacing", "gap-<num>"] }],
  [/^(?:flex-|grid-)?gap-([xy])-?(.+)$/, handleGap, { autocomplete: ["gap-(x|y)-$spacing", "gap-(x|y)-<num>"] }],
  [/^(?:flex-|grid-)?gap-(col|row)-?(.+)$/, handleGap, { autocomplete: ["gap-(col|row)-$spacing", "gap-(col|row)-<num>"] }]
];

const overflowValues = [
  "auto",
  "hidden",
  "clip",
  "visible",
  "scroll",
  "overlay",
  ...globalKeywords
];
const overflows = [
  [/^(?:overflow|of)-(.+)$/, ([, v]) => overflowValues.includes(v) ? { overflow: v } : void 0, { autocomplete: [`(overflow|of)-(${overflowValues.join("|")})`, `(overflow|of)-(x|y)-(${overflowValues.join("|")})`] }],
  [/^(?:overflow|of)-([xy])-(.+)$/, ([, d, v]) => overflowValues.includes(v) ? { [`overflow-${d}`]: v } : void 0]
];

const positions = [
  [/^(?:position-|pos-)?(relative|absolute|fixed|sticky)$/, ([, v]) => ({ position: v }), {
    autocomplete: [
      "(position|pos)-<position>",
      "(position|pos)-<globalKeyword>",
      "<position>"
    ]
  }],
  [/^(?:position-|pos-)([-\w]+)$/, ([, v]) => globalKeywords.includes(v) ? { position: v } : void 0],
  [/^(?:position-|pos-)?(static)$/, ([, v]) => ({ position: v })]
];
const justifies = [
  // contents
  ["justify-start", { "justify-content": "flex-start" }],
  ["justify-end", { "justify-content": "flex-end" }],
  ["justify-center", { "justify-content": "center" }],
  ["justify-between", { "justify-content": "space-between" }],
  ["justify-around", { "justify-content": "space-around" }],
  ["justify-evenly", { "justify-content": "space-evenly" }],
  ["justify-stretch", { "justify-content": "stretch" }],
  ["justify-left", { "justify-content": "left" }],
  ["justify-right", { "justify-content": "right" }],
  ...makeGlobalStaticRules("justify", "justify-content"),
  // items
  ["justify-items-start", { "justify-items": "start" }],
  ["justify-items-end", { "justify-items": "end" }],
  ["justify-items-center", { "justify-items": "center" }],
  ["justify-items-stretch", { "justify-items": "stretch" }],
  ...makeGlobalStaticRules("justify-items"),
  // selfs
  ["justify-self-auto", { "justify-self": "auto" }],
  ["justify-self-start", { "justify-self": "start" }],
  ["justify-self-end", { "justify-self": "end" }],
  ["justify-self-center", { "justify-self": "center" }],
  ["justify-self-stretch", { "justify-self": "stretch" }],
  ...makeGlobalStaticRules("justify-self")
];
const orders = [
  [/^order-(.+)$/, ([, v]) => ({ order: h.bracket.cssvar.number(v) })],
  ["order-first", { order: "-9999" }],
  ["order-last", { order: "9999" }],
  ["order-none", { order: "0" }]
];
const alignments = [
  // contents
  ["content-center", { "align-content": "center" }],
  ["content-start", { "align-content": "flex-start" }],
  ["content-end", { "align-content": "flex-end" }],
  ["content-between", { "align-content": "space-between" }],
  ["content-around", { "align-content": "space-around" }],
  ["content-evenly", { "align-content": "space-evenly" }],
  ...makeGlobalStaticRules("content", "align-content"),
  // items
  ["items-start", { "align-items": "flex-start" }],
  ["items-end", { "align-items": "flex-end" }],
  ["items-center", { "align-items": "center" }],
  ["items-baseline", { "align-items": "baseline" }],
  ["items-stretch", { "align-items": "stretch" }],
  ...makeGlobalStaticRules("items", "align-items"),
  // selfs
  ["self-auto", { "align-self": "auto" }],
  ["self-start", { "align-self": "flex-start" }],
  ["self-end", { "align-self": "flex-end" }],
  ["self-center", { "align-self": "center" }],
  ["self-stretch", { "align-self": "stretch" }],
  ["self-baseline", { "align-self": "baseline" }],
  ...makeGlobalStaticRules("self", "align-self")
];
const placements = [
  // contents
  ["place-content-center", { "place-content": "center" }],
  ["place-content-start", { "place-content": "start" }],
  ["place-content-end", { "place-content": "end" }],
  ["place-content-between", { "place-content": "space-between" }],
  ["place-content-around", { "place-content": "space-around" }],
  ["place-content-evenly", { "place-content": "space-evenly" }],
  ["place-content-stretch", { "place-content": "stretch" }],
  ...makeGlobalStaticRules("place-content"),
  // items
  ["place-items-start", { "place-items": "start" }],
  ["place-items-end", { "place-items": "end" }],
  ["place-items-center", { "place-items": "center" }],
  ["place-items-stretch", { "place-items": "stretch" }],
  ...makeGlobalStaticRules("place-items"),
  // selfs
  ["place-self-auto", { "place-self": "auto" }],
  ["place-self-start", { "place-self": "start" }],
  ["place-self-end", { "place-self": "end" }],
  ["place-self-center", { "place-self": "center" }],
  ["place-self-stretch", { "place-self": "stretch" }],
  ...makeGlobalStaticRules("place-self")
];
const flexGridJustifiesAlignments = [...justifies, ...alignments].flatMap(([k, v]) => [
  [`flex-${k}`, v],
  [`grid-${k}`, v]
]);
function handleInsetValue(v, { theme }) {
  return theme.spacing?.[v] ?? h.bracket.cssvar.global.auto.fraction.rem(v);
}
function handleInsetValues([, d, v], ctx) {
  const r = handleInsetValue(v, ctx);
  if (r != null && d in insetMap)
    return insetMap[d].map((i) => [i.slice(1), r]);
}
const insets = [
  [
    /^(?:position-|pos-)?inset-(.+)$/,
    ([, v], ctx) => ({ inset: handleInsetValue(v, ctx) }),
    {
      autocomplete: [
        "(position|pos)-inset-<directions>-$spacing",
        "(position|pos)-inset-(block|inline)-$spacing",
        "(position|pos)-inset-(bs|be|is|ie)-$spacing",
        "(position|pos)-(top|left|right|bottom)-$spacing"
      ]
    }
  ],
  [/^(?:position-|pos-)?(start|end)-(.+)$/, handleInsetValues],
  [/^(?:position-|pos-)?inset-([xy])-(.+)$/, handleInsetValues],
  [/^(?:position-|pos-)?inset-([rltbse])-(.+)$/, handleInsetValues],
  [/^(?:position-|pos-)?inset-(block|inline)-(.+)$/, handleInsetValues],
  [/^(?:position-|pos-)?inset-([bi][se])-(.+)$/, handleInsetValues],
  [/^(?:position-|pos-)?(top|left|right|bottom)-(.+)$/, ([, d, v], ctx) => ({ [d]: handleInsetValue(v, ctx) })]
];
const floats = [
  // floats
  ["float-left", { float: "left" }],
  ["float-right", { float: "right" }],
  ["float-none", { float: "none" }],
  ...makeGlobalStaticRules("float"),
  // clears
  ["clear-left", { clear: "left" }],
  ["clear-right", { clear: "right" }],
  ["clear-both", { clear: "both" }],
  ["clear-none", { clear: "none" }],
  ...makeGlobalStaticRules("clear")
];
const zIndexes = [
  [/^(?:position-|pos-)?z([\d.]+)$/, ([, v]) => ({ "z-index": h.number(v) })],
  [/^(?:position-|pos-)?z-(.+)$/, ([, v], { theme }) => ({ "z-index": theme.zIndex?.[v] ?? h.bracket.cssvar.global.auto.number(v) }), { autocomplete: "z-<num>" }]
];
const boxSizing = [
  ["box-border", { "box-sizing": "border-box" }],
  ["box-content", { "box-sizing": "content-box" }],
  ...makeGlobalStaticRules("box", "box-sizing")
];

const shadowToken = [
  // use of component hover（tree|table drag）
  ["shadow-1", { "box-shadow": "0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%)" }],
  // use of drag-down components，such as menu|select|tooltip
  ["shadow-2", { "box-shadow": "0 3px 14px 2px rgba(0, 0, 0, 5%), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%)" }],
  // use of Modal|drawer|Message
  ["shadow-3", { "box-shadow": "0 6px 30px 5px rgba(0, 0, 0, 5%), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%)" }]
];

const sizeMapping = {
  h: "height",
  w: "width",
  inline: "inline-size",
  block: "block-size"
};
function getPropName(minmax, hw) {
  return `${minmax || ""}${sizeMapping[hw]}`;
}
function getSizeValue(minmax, hw, theme, prop) {
  const str = getPropName(minmax, hw).replace(/-(\w)/g, (_, p) => p.toUpperCase());
  const v = theme[str]?.[prop];
  if (v != null)
    return v;
  switch (prop) {
    case "fit":
    case "max":
    case "min":
      return `${prop}-content`;
  }
  return h.bracket.cssvar.global.auto.fraction.rem(prop);
}
const sizes = [
  [/^size-(min-|max-)?(.+)$/, ([, m, s], { theme }) => ({ [getPropName(m, "w")]: getSizeValue(m, "w", theme, s), [getPropName(m, "h")]: getSizeValue(m, "h", theme, s) })],
  [/^(?:size-)?(min-|max-)?([wh])-?(.+)$/, ([, m, w, s], { theme }) => ({ [getPropName(m, w)]: getSizeValue(m, w, theme, s) })],
  [/^(?:size-)?(min-|max-)?(block|inline)-(.+)$/, ([, m, w, s], { theme }) => ({ [getPropName(m, w)]: getSizeValue(m, w, theme, s) }), {
    autocomplete: [
      "(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(max|min)-(w|h|block|inline)",
      "(max|min)-(w|h|block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(w|h)-full",
      "(max|min)-(w|h)-full"
    ]
  }],
  [/^(?:size-)?(min-|max-)?(h)-screen-(.+)$/, ([, m, h2, p], context) => ({ [getPropName(m, h2)]: handleBreakpoint(context, p, "verticalBreakpoints") })],
  [/^(?:size-)?(min-|max-)?(w)-screen-(.+)$/, ([, m, w, p], context) => ({ [getPropName(m, w)]: handleBreakpoint(context, p) }), {
    autocomplete: [
      "(w|h)-screen",
      "(min|max)-(w|h)-screen",
      "h-screen-$verticalBreakpoints",
      "(min|max)-h-screen-$verticalBreakpoints",
      "w-screen-$breakpoints",
      "(min|max)-w-screen-$breakpoints"
    ]
  }]
];
function handleBreakpoint(context, point, key = "breakpoints") {
  const bp = resolveBreakpoints(context, key);
  if (bp)
    return bp.find((i) => i.point === point)?.size;
}
function getAspectRatio(prop) {
  if (/^\d+\/\d+$/.test(prop))
    return prop;
  switch (prop) {
    case "square":
      return "1/1";
    case "video":
      return "16/9";
  }
  return h.bracket.cssvar.global.auto.number(prop);
}
const aspectRatio = [
  [/^(?:size-)?aspect-(?:ratio-)?(.+)$/, ([, d]) => ({ "aspect-ratio": getAspectRatio(d) }), { autocomplete: ["aspect-(square|video|ratio)", "aspect-ratio-(square|video)"] }]
];

const paddings = [
  [/^pa?()-?(-?.+)$/, directionSize("padding"), { autocomplete: ["(m|p)<num>", "(m|p)-<num>"] }],
  [/^p-?xy()()$/, directionSize("padding"), { autocomplete: "(m|p)-(xy)" }],
  [/^p-?([xy])(?:-?(-?.+))?$/, directionSize("padding")],
  [/^p-?([rltbse])(?:-?(-?.+))?$/, directionSize("padding"), { autocomplete: "(m|p)<directions>-<num>" }],
  [/^p-(block|inline)(?:-(-?.+))?$/, directionSize("padding"), { autocomplete: "(m|p)-(block|inline)-<num>" }],
  [/^p-?([bi][se])(?:-?(-?.+))?$/, directionSize("padding"), { autocomplete: "(m|p)-(bs|be|is|ie)-<num>" }]
];
const margins = [
  [/^ma?()-?(-?.+)$/, directionSize("margin")],
  [/^m-?xy()()$/, directionSize("margin")],
  [/^m-?([xy])(?:-?(-?.+))?$/, directionSize("margin")],
  [/^m-?([rltbse])(?:-?(-?.+))?$/, directionSize("margin")],
  [/^m-(block|inline)(?:-(-?.+))?$/, directionSize("margin")],
  [/^m-?([bi][se])(?:-?(-?.+))?$/, directionSize("margin")]
];

const cursorValues = ["auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait", "cell", "crosshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"];
const containValues = ["none", "strict", "content", "size", "inline-size", "layout", "style", "paint"];
const varEmpty = " ";
const displays = [
  ["inline", { display: "inline" }],
  ["block", { display: "block" }],
  ["inline-block", { display: "inline-block" }],
  ["contents", { display: "contents" }],
  ["flow-root", { display: "flow-root" }],
  ["list-item", { display: "list-item" }],
  ["hidden", { display: "none" }],
  [/^display-(.+)$/, ([, c]) => ({ display: h.bracket.cssvar.global(c) })]
];
const appearances = [
  ["visible", { visibility: "visible" }],
  ["invisible", { visibility: "hidden" }],
  ["backface-visible", { "backface-visibility": "visible" }],
  ["backface-hidden", { "backface-visibility": "hidden" }],
  ...makeGlobalStaticRules("backface", "backface-visibility")
];
const cursors = [
  [/^cursor-(.+)$/, ([, c]) => ({ cursor: h.bracket.cssvar.global(c) })],
  ...cursorValues.map((v) => [`cursor-${v}`, { cursor: v }])
];
const contains = [
  [/^contain-(.*)$/, ([, d]) => {
    if (h.bracket(d) != null) {
      return {
        contain: h.bracket(d).split(" ").map((e) => h.cssvar.fraction(e) ?? e).join(" ")
      };
    }
    return containValues.includes(d) ? { contain: d } : void 0;
  }]
];
const pointerEvents = [
  ["pointer-events-auto", { "pointer-events": "auto" }],
  ["pointer-events-none", { "pointer-events": "none" }],
  ...makeGlobalStaticRules("pointer-events")
];
const resizes = [
  ["resize-x", { resize: "horizontal" }],
  ["resize-y", { resize: "vertical" }],
  ["resize", { resize: "both" }],
  ["resize-none", { resize: "none" }],
  ...makeGlobalStaticRules("resize")
];
const userSelects = [
  ["select-auto", { "-webkit-user-select": "auto", "user-select": "auto" }],
  ["select-all", { "-webkit-user-select": "all", "user-select": "all" }],
  ["select-text", { "-webkit-user-select": "text", "user-select": "text" }],
  ["select-none", { "-webkit-user-select": "none", "user-select": "none" }],
  ...makeGlobalStaticRules("select", "user-select")
];
const whitespaces = [
  [
    /^(?:whitespace-|ws-)([-\w]+)$/,
    ([, v]) => ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces", ...globalKeywords].includes(v) ? { "white-space": v } : void 0,
    { autocomplete: "(whitespace|ws)-(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)" }
  ]
];
const contentVisibility = [
  [/^intrinsic-size-(.+)$/, ([, d]) => ({ "contain-intrinsic-size": h.bracket.cssvar.global.fraction.rem(d) }), { autocomplete: "intrinsic-size-<num>" }],
  ["content-visibility-visible", { "content-visibility": "visible" }],
  ["content-visibility-hidden", { "content-visibility": "hidden" }],
  ["content-visibility-auto", { "content-visibility": "auto" }],
  ...makeGlobalStaticRules("content-visibility")
];
const contents = [
  [/^content-(.+)$/, ([, v]) => ({ content: h.bracket.cssvar(v) })],
  ["content-empty", { content: '""' }],
  ["content-none", { content: "none" }]
];
const breaks = [
  ["break-normal", { "overflow-wrap": "normal", "word-break": "normal" }],
  ["break-words", { "overflow-wrap": "break-word" }],
  ["break-all", { "word-break": "break-all" }],
  ["break-keep", { "word-break": "keep-all" }],
  ["break-anywhere", { "overflow-wrap": "anywhere" }]
];
const textWraps = [
  ["text-wrap", { "text-wrap": "wrap" }],
  ["text-nowrap", { "text-wrap": "nowrap" }],
  ["text-balance", { "text-wrap": "balance" }],
  ["text-pretty", { "text-wrap": "pretty" }]
];
const textOverflows = [
  ["truncate", { "overflow": "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }],
  ["text-truncate", { "overflow": "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }],
  ["text-ellipsis", { "text-overflow": "ellipsis" }],
  ["text-clip", { "text-overflow": "clip" }]
];
const textTransforms = [
  ["case-upper", { "text-transform": "uppercase" }],
  ["case-lower", { "text-transform": "lowercase" }],
  ["case-capital", { "text-transform": "capitalize" }],
  ["case-normal", { "text-transform": "none" }],
  ...makeGlobalStaticRules("case", "text-transform")
];
const fontStyles = [
  ["italic", { "font-style": "italic" }],
  ["not-italic", { "font-style": "normal" }],
  ["font-italic", { "font-style": "italic" }],
  ["font-not-italic", { "font-style": "normal" }],
  ["oblique", { "font-style": "oblique" }],
  ["not-oblique", { "font-style": "normal" }],
  ["font-oblique", { "font-style": "oblique" }],
  ["font-not-oblique", { "font-style": "normal" }]
];
const fontSmoothings = [
  ["antialiased", {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale"
  }],
  ["subpixel-antialiased", {
    "-webkit-font-smoothing": "auto",
    "-moz-osx-font-smoothing": "auto"
  }]
];

const transformValues = [
  "translate",
  "rotate",
  "scale"
];
const transformCpu = [
  "translateX(var(--un-translate-x))",
  "translateY(var(--un-translate-y))",
  "translateZ(var(--un-translate-z))",
  "rotate(var(--un-rotate))",
  "rotateX(var(--un-rotate-x))",
  "rotateY(var(--un-rotate-y))",
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))",
  "scaleZ(var(--un-scale-z))"
].join(" ");
const transformGpu = [
  "translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))",
  "rotate(var(--un-rotate))",
  "rotateX(var(--un-rotate-x))",
  "rotateY(var(--un-rotate-y))",
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))",
  "scaleZ(var(--un-scale-z))"
].join(" ");
const transformBase = {
  // transform
  "--un-rotate": 0,
  "--un-rotate-x": 0,
  "--un-rotate-y": 0,
  "--un-rotate-z": 0,
  "--un-scale-x": 1,
  "--un-scale-y": 1,
  "--un-scale-z": 1,
  "--un-skew-x": 0,
  "--un-skew-y": 0,
  "--un-translate-x": 0,
  "--un-translate-y": 0,
  "--un-translate-z": 0
};
const transforms = [
  // origins
  [/^(?:transform-)?origin-(.+)$/, ([, s]) => ({ "transform-origin": positionMap[s] ?? h.bracket.cssvar(s) }), { autocomplete: [`transform-origin-(${Object.keys(positionMap).join("|")})`, `origin-(${Object.keys(positionMap).join("|")})`] }],
  // perspectives
  [/^(?:transform-)?perspect(?:ive)?-(.+)$/, ([, s]) => {
    const v = h.bracket.cssvar.px.numberWithUnit(s);
    if (v != null) {
      return {
        "-webkit-perspective": v,
        "perspective": v
      };
    }
  }],
  // skip 1 & 2 letters shortcut
  [/^(?:transform-)?perspect(?:ive)?-origin-(.+)$/, ([, s]) => {
    const v = h.bracket.cssvar(s) ?? (s.length >= 3 ? positionMap[s] : void 0);
    if (v != null) {
      return {
        "-webkit-perspective-origin": v,
        "perspective-origin": v
      };
    }
  }],
  // modifiers
  [/^(?:transform-)?translate-()(.+)$/, handleTranslate],
  [/^(?:transform-)?translate-([xyz])-(.+)$/, handleTranslate],
  [/^(?:transform-)?rotate-()(.+)$/, handleRotate],
  [/^(?:transform-)?rotate-([xyz])-(.+)$/, handleRotate],
  [/^(?:transform-)?skew-()(.+)$/, handleSkew],
  [/^(?:transform-)?skew-([xy])-(.+)$/, handleSkew, { autocomplete: ["transform-skew-(x|y)-<percent>", "skew-(x|y)-<percent>"] }],
  [/^(?:transform-)?scale-()(.+)$/, handleScale],
  [/^(?:transform-)?scale-([xyz])-(.+)$/, handleScale, { autocomplete: [`transform-(${transformValues.join("|")})-<percent>`, `transform-(${transformValues.join("|")})-(x|y|z)-<percent>`, `(${transformValues.join("|")})-<percent>`, `(${transformValues.join("|")})-(x|y|z)-<percent>`] }],
  // style
  [/^(?:transform-)?preserve-3d$/, () => ({ "transform-style": "preserve-3d" })],
  [/^(?:transform-)?preserve-flat$/, () => ({ "transform-style": "flat" })],
  // base
  ["transform", { transform: transformCpu }],
  ["transform-cpu", { transform: transformCpu }],
  ["transform-gpu", { transform: transformGpu }],
  ["transform-none", { transform: "none" }],
  ...makeGlobalStaticRules("transform")
];
function handleTranslate([, d, b], { theme }) {
  const v = theme.spacing?.[b] ?? h.bracket.cssvar.fraction.rem(b);
  if (v != null) {
    return [
      ...xyzMap[d].map((i) => [`--un-translate${i}`, v]),
      ["transform", transformCpu]
    ];
  }
}
function handleScale([, d, b]) {
  const v = h.bracket.cssvar.fraction.percent(b);
  if (v != null) {
    return [
      ...xyzMap[d].map((i) => [`--un-scale${i}`, v]),
      ["transform", transformCpu]
    ];
  }
}
function handleRotate([, d = "", b]) {
  const v = h.bracket.cssvar.degree(b);
  if (v != null) {
    if (d) {
      return {
        "--un-rotate": 0,
        [`--un-rotate-${d}`]: v,
        "transform": transformCpu
      };
    } else {
      return {
        "--un-rotate-x": 0,
        "--un-rotate-y": 0,
        "--un-rotate-z": 0,
        "--un-rotate": v,
        "transform": transformCpu
      };
    }
  }
}
function handleSkew([, d, b]) {
  const v = h.bracket.cssvar.degree(b);
  if (v != null) {
    return [
      ...xyzMap[d].map((i) => [`--un-skew${i}`, v]),
      ["transform", transformCpu]
    ];
  }
}

const rules = [
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
].flat(1);

export { aspectRatio as A, paddings as B, margins as C, varEmpty as D, displays as E, appearances as F, cursors as G, contains as H, pointerEvents as I, resizes as J, userSelects as K, whitespaces as L, contentVisibility as M, contents as N, breaks as O, textWraps as P, textOverflows as Q, textTransforms as R, fontStyles as S, fontSmoothings as T, transformBase as U, transforms as V, colorToken as a, background as b, color as c, colorInteractionToken as d, font as e, flex as f, fontWeight as g, fontTypeMap as h, fontShortcuts as i, gaps as j, justifies as k, orders as l, alignments as m, placements as n, overflows as o, positions as p, flexGridJustifiesAlignments as q, rules as r, insets as s, textAligns as t, floats as u, verticalAligns as v, boxSizing as w, shadowToken as x, sizes as y, zIndexes as z };
