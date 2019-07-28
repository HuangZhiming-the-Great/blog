module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: '@devrsi0n/eslint-config-react',
  rules: {
    'class-methods-use-this': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
  },
};
