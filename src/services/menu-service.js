export default function loadMenuData() {
  return Promise.resolve([
    {
      slug: 'home',
      labelId: 'mainMenu.home',
      url: '',
      subItems: null
    },
    {
      slug: 'about',
      labelId: 'mainMenu.about',
      url: '/owatrze',
      subItems: null
    },
    {
      slug: 'artists',
      labelId: 'mainMenu.artists',
      url: '/wykonawcy',
      subItems: null
    },
    {
      slug: 'program',
      labelId: 'mainMenu.programme',
      url: '/program',
      subItems: null
    },
    {
      slug: 'info',
      labelId: 'mainMenu.info',
      url: '/informacje',
      subItems: [
        {
          labelId: 'mainMenu.info.location',
          url: '/informacje?kategoria=lokalizacja'
        },
        {
          labelId: 'mainMenu.info.terms',
          url: '/informacje?kategoria=regulamin'
        },
        {
          labelId: 'mainMenu.info.pricing',
          url: '/informacje?kategoria=cennik'
        },
        {
          labelId: 'mainMenu.info.parking',
          url: '/informacje?kategoria=parking'
        },
        {
          labelId: 'mainMenu.info.accommodation',
          url: '/informacje?kategoria=baza'
        },
        {
          labelId: 'mainMenu.info.financialSettlement',
          url: '/informacje?kategoria=rozliczenia'
        },
        {
          labelId: 'mainMenu.info.cooperation',
          url: '/informacje?kategoria=oferta'
        },
        {
          labelId: 'mainMenu.info.takePart',
          url: '/informacje?kategoria=udzial'
        }
      ]
    },
    {
      slug: 'gallery',
      labelId: 'mainMenu.gallery',
      url: '/galeria',
      subItems: null
    },
    {
      slug: 'contact',
      labelId: 'mainMenu.contact',
      url: '/kontakt',
      subItems: null
    }
  ]);
}
