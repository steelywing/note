---
date: 2024-08-01
tags: [JavaScript]
---

# Bundler for JavaScript

## Vite

> [Vite](https://vitejs.dev/)

- **Recommended**
- For TS, JS, CSS, HTML
- Faster
- Vite use [Rollup](#rollup) for `vite build`
- Vite use [ESBuild](#esbuild) for `vite dev`

<!--truncate-->

## Rollup

> [Rollup](https://rollupjs.org/)

- For JS
- Faster than WebPack
- Support `import` ES6, CommonJS, ...
- Support output format: AMD, CommonJS, ES, IIFE, UMD, SystemJS
- Written in JavaScript

## Rolldown

> [Rolldown](https://rolldown.rs/)

- Rollup compatible API
- Faster than Rollup
- Written in Rust

## ESBuild

> [ESBuild](https://esbuild.github.io/)

- For JS, JSX
- Extremely fast
- Written in Go

## Bun

> [Bun](https://bun.sh/)

- Bun is all-in-one toolkit, include:
  - JavaScript / TypeScript runtime
  - Package manager
  - Bundler
  - Test runner
- For TS, JS, JSX
- Extremely fast
- Written in Zig
- Use JavaScriptCore (WebKit) as JS engine

## WebPack

> [WebPack](https://webpack.js.org/)

- For JS, CSS, HTML
- Popular
- Slow
- Complex configuration
- Written in JavaScript

## RsPack

> [RsPack](https://github.com/web-infra-dev/rspack)

- WebPack compatible API
- Written in Rust
- Created by ByteDance

## Farm

[Farm](https://github.com/farm-fe/farm)

- Written in Rust
- Vite compatible

## Mako

[Mako](https://github.com/umijs/mako)

- Written in Rust
- Used by Ant Group

## Parcel

[Parcel](https://parceljs.org/)

- For JS, CSS, HTML
- Zero configuration
- Slow
- Written in JavaScript

## Parcel 2

[Parcel](https://parceljs.org/)

- Built on [SWC](https://swc.rs/) (Rust based)
- For JS, CSS, HTML
- Zero configuration
- Not stable
- Written in JavaScript
