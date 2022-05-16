// import '~vuetify/src/styles/styles.sass'

export default {
  // ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sportify',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // ,'~/plugins/datepicker.js'
  plugins: [
    // '~/plugins/bootstrap-vue.js',
    // '~/plugins/validation.js',
    // '~/plugins/axios.js',
    '~plugins/vuetify.js',
    '~plugins/client.vars.js',
    '~plugins/axios.js',
    '~plugins/vue-carousel.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],

  i18n: {
    locales: [
      { code: 'ar', iso: 'ar-EG', file: 'ar-EG.js', dir: 'rtl' },
      { code: 'en', iso: 'en-US', file: 'en-US.js', dir: 'ltr' },
    ],
    langDir: '@/lang/',
    strategy: 'no_prefix',
    defaultLocale: 'ar',
    detectBrowserLanguage: true,
    vueI18n: {
      fallbackLocale: 'ar',
      messages: {
        ar: require('./lang/ar-EG.js'),
        en: require('./lang/en-US.js'),
      },
    },
  },

  styleResources: {
    scss: ['~/assets/css/_colors.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // credentials: true,
    baseURL: 'http://offsideapi.anamuslim.co/api/',
    // browserBaseURL: 'offsideapi.anamuslim.co/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    routeNameSplitter: '/',
  },
}
