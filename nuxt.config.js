
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
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
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'http://localhost/bookings_app/public/api/v1/login', method: 'post', propertyName: 'data.token'},
          logout: {url: 'http://localhost/bookings_app/public/api/v1/logout', method: 'post'},
          user: {url: 'http://localhost/bookings_app/public/api/v1/get-auth-user', method: 'get', propertyName: 'data'}
        },
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/dashboard',
    },
  },
  axios: {
    'baseURL': "http://localhost/bookings_app/public/api/v1"
  },
  router: {
    middleware: ['auth']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['nuxt-fontawesome',
    {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
