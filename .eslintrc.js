module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
    `prettier`,
    `eslint:recommended`,
    `plugin:react/recommended`,
  ],
  plugins: [`react`, `@typescript-eslint`, `prettier`],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  rules: {
    quotes: `off`,
    "@typescript-eslint/quotes": [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    indent: [`error`, 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      `error`,
      {
        trailingComma: `es5`,
        semi: false,
        singleQuote: false,
        printWidth: 120,
      },
    ],
  },
  settings: {
    react: {
      version: `detect`,
    },
  },
}
