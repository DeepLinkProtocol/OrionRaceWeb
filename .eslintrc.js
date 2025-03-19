module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // 支持 Vue 3
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-unused-vars': 'warn', // 未使用变量警告
    'vue/no-unused-vars': 'warn', // Vue 模板中未使用变量
    'vue/no-unused-components': 'warn', // 未使用组件
  },
};
