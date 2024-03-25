# NPM

Node.js Package Manager

## Alternative

- [Yarn](https://yarnpkg.com/)
- [PNPM](https://pnpm.io/)
- [Bun](https://github.com/oven-sh/bun)

## `scripts` in sequence

Works on Linux and Windows

```json
{
  "scripts" : {
    "build.js" : "...",
    "build.css" : "...",
    "build" : "npm run build.js && npm run build.css"
  }
}
```

## `scrtips` in parallel

On Linux

```json
{
  "scripts" : {
    "watch.js" : "...",
    "watch.css" : "...",
    "watch" : "npm run watch.js & npm run watch.css"
  }
}
```

On Linux and Windows

```bash
npm i concurrently --save-dev
```

```bash
concurrently "npm:watch.js" "npm:watch.css"

# or

concurrently "npm:watch.*"
```

```json
{
  "scripts" : {
    "watch.js" : "...",
    "watch.css" : "...",
    "watch" : "concurrently 'npm:watch.*'"
  }
}
```

## `yarn run`

`yarn run <command>` will execute the first match of

- `scripts` field from local `package.json`
- the local workspace's dependencies binary
- the specified name contains a colon character and one of the workspaces in the project contains exactly one script with a matching name

## `npx`

`npx <command>` will execute the first match of

- `<command>` exists in PATH
- the local project binaries
- If `<command>` is not found, it will be installed prior to execution
