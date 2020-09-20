module.exports = {
    title: 'Nuxtjs en español',
    description: 'Documentacion de nuxtjs en español.',
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guia', link: '/guia/empezar/instalacion/' },
          { text: 'External', link: 'https://google.com' }
        ],
        sidebar:[
            {
              title: 'PROLOGO',
              children: [
                '/guia/prologo/'
              ]
            },
            {
              title: 'EMPEZANDO',
              children: [
                  '/guia/empezar/instalacion/'
              ],
              //initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
            }
          ]
      }
     
  }