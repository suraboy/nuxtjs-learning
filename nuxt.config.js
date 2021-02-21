module.exports = {
  head: {
    title: 'Vue Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
  },

  modules: [
    '@nuxt/http',
    'bootstrap-vue/nuxt',
  ],

  http: {
    baseURL: 'https://api.thedogapi.com/v1/',
  },

  performance: {
    gzip: false
  },
  dev: false,

  render: {
    compressor: false,
  },
};
