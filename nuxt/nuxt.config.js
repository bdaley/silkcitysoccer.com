
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Silk City Soccer Club',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,300,700|Oswald:400,300,700|Montserrat:400,700|Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css',
        integrity: 'sha256-NuCn4IvuZXdBaFKJOAcsU2Q3ZpwbdFisd5dux4jkQ5w=',
        crossorigin: 'anonymous'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {
      //   src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js",
      //   integrity: "sha256-nuL8/2cJ5NDSSwnKD8VqreErSWHtnEP9E7AySL+1ev4=",
      //   crossorigin: "anonymous"
      // }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~plugins/client',
      mode: 'client'
    }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  router: {
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if(process.client){

      }
    }
  }
}
