module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-hex-length': 'long',
    'font-family-name-quotes': 'always-unless-keyword',
    'selector-class-pattern': '(([a-z]+)(-[a-z]+)*)(__([a-z]+)(-[a-z]+)*)?(--([a-z]+)(-[a-z]+)*)?',
    'string-quotes': 'single',
  },
};
