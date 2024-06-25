module.exports = {
  extends: [
    'plugin:@dvcol/presets/base',
    'plugin:@dvcol/presets/jest',
    'expo',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:@dvcol/presets/prettier'
  ],
  rules: {
    "global-require": "warn",
  }
};
