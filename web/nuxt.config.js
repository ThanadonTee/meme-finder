require('dotenv').config()
export default {
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Find you meme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/style.css'],

  env: {
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:3001',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap',
    },
    {
      script: [
        {
          src: '~/assets/mockdata.js',
        },
      ],
    },
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}
