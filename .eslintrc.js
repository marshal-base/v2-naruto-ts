module.exports = {
  root: true,
  // settings: {
  //   'import/resolver': {
  //     "config": "node_modules/@vue/cli-service/webpack.config.js",
  //     alias: {
  //       map: [
  //         ["src", '../src']
  //       ],
  //       // 告诉resolver-alias有哪些后缀的文件要解析
  //       extensions: ['.ts', '.tsx', '.vue', '.json'],
  //     },
  //   },
  // },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/multi-word-component-names': 0,
    'operator-assignment': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    curly: ['error', 'all'],
    'no-else-return': ['warn', { allowElseIf: false }],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    // 使用对象和数组的解构
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'spaced-comment': ['error', 'always'],
    'vue/no-mutating-props': ['off'],
    // 在 case 中可以使用语法声明
    'no-case-declarations': ['off']
  }
};
