## DS-COMPONENT

## 介绍

这是一个集成了 UNOCSS PRESET-MINI 与 UED TOKEN 的 预设库，用于提供原子化的css style，统一公司内部样式规范。

## 技术栈

- Vue 3
- TypeScript
- Vite

## 项目结构

```
├── site
│   └── docs                    演示文档
│       ├── guid                文档导航
│       └── index.md            文档首页
├── playground                  vue3+ts+vite 生成playground
├── packages                    预设包
│   ├── preset-ued              ued预设
│   │   ├── dist                npm包
│   │   ├── src                 预设代码
│   │   ├── build.config.ts     打包脚本
│   │   └── README              预设说明
│   └── /                   
```

## 项目安装

```
pnpm install
```

## 项目运行

```
cd playground
pnpm run dev
```
