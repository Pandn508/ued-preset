import {
  defineConfig, presetAttributify,
  transformerDirectives,
  presetTagify,
  transformerVariantGroup
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import { presetUed } from 'preset-ued';
export default defineConfig({
  theme: {

  },
  shortcuts: {

  },
  presets: [
    // 属性化模式，<div class="flex"> => <div flex>
    presetAttributify({ /* preset options */ }),
    // 标签化模式，单个uno规则应用 <div flex> => <flex>
    presetTagify({}),

    presetUed(),
  ],
  transformers: [
    // 指令：@apply、@sreen、theme()
    transformerDirectives(),
    // 前缀组，解决繁琐的多次写前缀的情况 hover:()
    transformerVariantGroup()
  ]
})