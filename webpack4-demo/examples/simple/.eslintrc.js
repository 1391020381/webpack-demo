module.exports = {
  extends: 'enough',
  env: {
    browser: true,
    node: true
  },
  rules: {
    // 统一换行符, "\n" unix(fo Lf) and "\r\n" for window(CRLF),默认 unix
    'linebreak-style': 'off',
    'space-before-function-paren': 'off'
  }
}