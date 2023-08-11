/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
  },
  extends: [
    "eslint:recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
