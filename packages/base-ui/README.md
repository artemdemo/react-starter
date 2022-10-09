## base-ui

Example of a common library in monorepo

### Types issue when using `exports` field

According to typescript documentation, types should be supported in `exports` object.

```json
// package.json
{
  "name": "my-package",
  "type": "module",
  "exports": {
    ".": {
      // Entry-point for `import "my-package"` in ESM
      "import": "./esm/index.js",
      // Entry-point for `require("my-package") in CJS
      "require": "./commonjs/index.cjs",
    },
  },
  // CJS fall-back for older versions of Node.js
  "main": "./commonjs/index.cjs",
}
```

Source: https://www.typescriptlang.org/docs/handbook/esm-node.html#packagejson-exports-imports-and-self-referencing

But it doesn't... I tested it with TypeScript 4.8 so maybe in the future it will change.

Meanwhile after a lot of digging I found out that there is additional configuration: `typesVersions` that indeed work:

```json
{
  "name": "base-ui",
  "type": "module",
  "exports": {
    ".": {
      "import": {
        "default": "./dist/index.js"
      }
    },
    "./BaseUiProvider": {
      "import": {
        "default": "./dist/BaseUiProvider/BaseUiProvider.js"
      }
    },
    "./package.json": "./package.json"
  },
  "typesVersions": {
    "*": {
      "BaseUiProvider": ["./dist/BaseUiProvider/BaseUiProvider.d.ts"],
      "*": ["./dist/*.d.ts"]
    }
  },
}
```

Source: https://github.com/microsoft/TypeScript/issues/50794#issuecomment-1251278131
