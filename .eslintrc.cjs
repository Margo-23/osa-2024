module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['jquery', 'prettier'],
  plugins: ['jquery', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    'no-var': 2,
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
};