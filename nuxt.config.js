import colors from 'vuetify/es5/util/colors'
const isDev = process.env.NODE_ENV !== 'production' ?? false

export default {
  head: {
    titleTemplate: '%s - client',
    title: 'Лавка пасечника',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Лавка пасечника'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },

  server: {
    host: '0.0.0.0',
    port: 3003
  },

  components: true,
  rootDir: __dirname,
  serverMiddleware: [],

  css: [
    "~/assets/main.css"
  ],

  plugins: [
    '~/plugins/v-mask.js'
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    "cookie-universal-nuxt"
  ],

  axios: {
    baseURL: '/',
    proxy: true
  },

  proxy: {
    '/auth/': {target: process.env.API_AUTH_LINK, pathRewrite: {'^/auth/': ''}},
    '/admin/': {target: process.env.API_ADMIN_LINK, pathRewrite: {'^/admin/': ''}},
    '/api-payment/': {target: process.env.API_YOO_KASSA_LINK, pathRewrite: {'^/api-payment/': ''}},
    '/api-products/': {target: process.env.API_PRODUCTS_LINK, pathRewrite: {'^/api-products/': ''}}
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    transpile: [
      "swiper"
    ]
  }
}
