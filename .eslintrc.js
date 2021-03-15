module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
