/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "prettier",
    'plugin:import/recommended',
    "plugin:jsx-a11y/recommended",

  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier', 'import', 'jsx-a11y', 'react', 'react-hooks', 'pretty-quick'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      {
        "prettier/prettier": ["error"]
      },
      {
        "jsx-a11y/rule-name": 2
      },
      {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
      },
      {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    ],
  },
}
