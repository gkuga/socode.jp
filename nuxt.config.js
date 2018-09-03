module.exports = {
  head: {
    title: '爽コード',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Russo+One' }
    ],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'UA-125132855-1',
    config:{
      anonymize_ip: true,
      send_page_view: false,
      linker:{
        domains:['domain.com','domain.org']
      }
    },
    debug: true,
    disableAutoPageTrack: false,
  }
}
