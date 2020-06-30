module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'sum', // for reduce accumulators
        'e', // for e.return value
        'Vue', // for Vue plugins install method
        'el' // for Vue directives and forEach/map
      ]
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'newline-per-chained-call': ['warn']
  },
  overrides: [
    {
      files: ['src/store/modules/*.js'],
      rules: {
        'no-shadow': 'off'
      }
    }
  ]
}
