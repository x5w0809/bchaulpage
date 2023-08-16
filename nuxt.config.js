// import { defineNuxtModule } from 'nuxt'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '寶輇車業｜BC HAUL',
    htmlAttrs: {
      lang: 'zh-Hant-TW',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '寶輇車業-超跑托運、拖救達人、五星感受。' },
      { name: 'keywords', content: '寶輇車業,超跑托運,拖救達人,BC HAUL,雙鷗翼透明車廂' },
      { hid: 'og:title', property: 'og:title', content: '寶輇車業｜BC HAUL' },
      { hid: 'og:description', name: 'og:description', content: '寶輇車業-超跑托運、拖救達人、五星感受。' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/image/pc/main/shareImg.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/index.scss',
    'swiper/swiper-bundle.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: '~/plugins/index/bannerAnime', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    
  ],
  buildModules: [
    '@nuxtjs/style-resources' // 主要是這個，要加入 style-resources
  ],
  styleResources: {
    scss: ['@/assets/css/setting.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
}
