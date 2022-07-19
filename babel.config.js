module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'transform-vue-jsx',
    '@babel/plugin-proposal-optional-chaining', // 可选链
    '@babel/plugin-proposal-nullish-coalescing-operator', // 双问号
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
}
