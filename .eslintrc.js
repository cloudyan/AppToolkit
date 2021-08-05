const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react-hooks/exhaustive-deps': 0,
    '@iceworks/best-practices/recommend-polyfill': 0,
    'import/order': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-require-imports': 0,
    'no-await-in-loop': 0
  },
});
