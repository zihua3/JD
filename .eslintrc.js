// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁用拖尾逗号
    "comma-dangle": 0,
    // 要求箭头函数体使用大括号
    "arrow-body-style": 2,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 2,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": 0,
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": 0,
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": 0,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    "semi": 0,
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": 0,
  }
}
