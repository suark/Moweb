module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': 1,
        'prettier/prettier': 2,
      },
    },
  ],
};
