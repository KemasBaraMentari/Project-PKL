// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  // auto-import aktif
  components: true,

  devtools: { enabled: false },

  nitro: {
    compatibilityDate: '2025-07-05'
  },

  app: {

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      link: [      
        {
          rel: 'icon',          
          sizes: "any",
          href: '/favicon.ico'
        },             
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
        },      
        {
          rel: 'stylesheet',
          href: '/assets/main.css'
        },      

      ],
      script: [              
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js'
        },    
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
        },                     
      ],
    },   
  },

  modules: ['@samk-dev/nuxt-vcalendar'],
})