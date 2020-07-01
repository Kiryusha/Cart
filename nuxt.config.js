import eslintFriendlyFormatter from 'eslint-friendly-formatter'
import fs from 'fs'

const envName = fs.existsSync('.env') ? '.env' : '.env.example'

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: envName
})

export default {
  mode: 'universal',

  server: {
    port: process.env.SERVER_PORT
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#404244' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/generalComponents'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/axios',
    {
      headers: {
        get: {
          // Указываем вручную, потому что у нас идёт мок-запрос
          'Content-Type': 'application/json'
        }
      }
    }],
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }]
  ],
  /*
   ** Styles for each component
   **
   ** Эти стили будут добавляться в каждый компонент
  */
  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
      '@/assets/scss/mixins.scss',
      '@/assets/scss/typography.scss'
    ],
  },
  // шрифты
  webfontloader: {
    google: {
      families: ['Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600']
    }
  },
  /*
  **  Конфигурация Dotenv
  */
  dotenv: {},
  /*
  ** Ax  ios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL
    // proxy: true,
  },
  /*
  ** as proxy configuration
  */
  // proxy: {
  //   '/api': {
  //     target: process.env.PROXY_API_TARGET,
  //     auth: process.env.PROXY_API_AUTH,
  //   },
  // },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter: eslintFriendlyFormatter
          }
        })
      }
    }
  }
}
