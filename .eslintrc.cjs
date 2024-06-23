// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['plugin:@dvcol/presets/base', 'plugin:@dvcol/presets/jest', 'expo', 'plugin:@dvcol/presets/prettier'],
  rules: {
    "global-require": "warn",
  }
};
