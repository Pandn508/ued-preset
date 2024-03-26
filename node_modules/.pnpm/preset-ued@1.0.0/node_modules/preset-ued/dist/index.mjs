import { d as definePreset } from './shared/preset-ued.cf91fee8.mjs';
import { theme } from './theme.mjs';
import { r as rules } from './shared/preset-ued.9e3e346f.mjs';

const presetUed = definePreset(() => {
  return {
    name: "@unocss/preset-ued",
    theme,
    rules
  };
});

export { presetUed };
