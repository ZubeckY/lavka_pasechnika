import colors from 'vuetify/es5/util/colors'
export default {
  head: {
    titleTemplate: '%s - client',
    title: 'client',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  css: [
    "~/assets/main.css"
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    "nuxt-storm"
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],

  firebase: {
      config: {
        apiKey: "AIzaSyBn2Nqhm49k9RN-7HeA4tPAujlYG3zYqYk",
        authDomain: "lavka-pasechnika-rf-a069f.firebaseapp.com",
        projectId: "lavka-pasechnika-rf-a069f",
        storageBucket: "lavka-pasechnika-rf-a069f.appspot.com",
        messagingSenderId: "1056712525346",
        appId: "1:1056712525346:web:e584718a5ee9288a2cac7b"
      },
      services: {
        auth: true // Just as example. Can be any other service.
      }
    },

  axios: {
    baseURL: '/',
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

  image: {
    inject: true
  },

  build: {
  },
}
