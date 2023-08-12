/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: false,
    node: true,
    ecmaVersion: "latest"
  },
  extends: ["eslint:recommended", 'plugin:@typescript-eslint/recommended', "prettier"],
  ignorePatterns: [".out/*", "node_modules/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],

};
