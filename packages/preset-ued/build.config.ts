import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/theme',
    'src/utils',
    'src/rules',
  ],
  clean: true,
  // 是否生成.d.ts
  declaration: true,
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    }
  },
  failOnWarn: false
})