'use strict';

const utils = require('./shared/preset-ued.772cdc87.cjs');
const theme = require('./theme.cjs');
const _default = require('./shared/preset-ued.ac5ef8c2.cjs');

const presetUed = utils.definePreset(() => {
  return {
    name: "@unocss/preset-ued",
    theme: theme.theme,
    rules: _default.rules
  };
});

exports.presetUed = presetUed;
