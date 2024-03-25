# Bundler

## WebPack

- For JS, CSS, HTML
- Popular
- Slow
- Complex configuration
- Written in JavaScript

## Parcel

- For JS, CSS, HTML
- Zero configuration
- Slow
- Written in JavaScript

## Parcel 2

- Built on [SWC](https://swc.rs/) (Rust based)
- For JS, CSS, HTML
- Zero configuration
- Not stable
- Written in JavaScript

## Rollup

- For JS
- Plugin for JSX
- Faster
- Support `import` ES6, CommonJS, ...
- Support output format: AMD, CommonJS, ES, IIFE, UMD, SystemJS
- Written in JavaScript

## ESBuild

- For JS, JSX
- Extremely fast
- Written in Go

## Vite

- For JS, CSS, HTML
- Faster
- Vite use [Rollup](#rollup) for `vite build`
- Vite use [ESBuild](#esbuild) for `vite dev`
