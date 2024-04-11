# Bundler

## WebPack

[WebPack](https://webpack.js.org/)

- For JS, CSS, HTML
- Popular
- Slow
- Complex configuration
- Written in JavaScript

## Rollup

[Rollup](https://rollupjs.org/)

- For JS
- Faster than WebPack
- Support `import` ES6, CommonJS, ...
- Support output format: AMD, CommonJS, ES, IIFE, UMD, SystemJS
- Written in JavaScript

## ESBuild

[ESBuild](https://esbuild.github.io/)

- For JS, JSX
- Extremely fast
- Written in Go

## Bun

[Bun](https://bun.sh/)

- For TS, JS, JSX
- Extremely fast
- Written in Zig
- Use JavaScriptCore (WebKit) as JS engine

## Vite

[Vite](https://vitejs.dev/)

- For TS, JS, CSS, HTML
- Faster
- Vite use [Rollup](#rollup) for `vite build`
- Vite use [ESBuild](#esbuild) for `vite dev`

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
