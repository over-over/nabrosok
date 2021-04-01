type TArtist = {
  name: string
  age: number
  city?: string
  type?: string
  biography?: string
  works: TArtistWork[]
  contacts?: TContacts
}

type TArtistWork = {
  name?: string
  date?: string
  description?: string
  media: string[]
}

type TContacts = {
  phone?: string
  email?: string
  instagram?: string
  telegram?: string
  vk?: string
}

export const mockData: TArtist[] = [
  {
    name: "Викторов Андрей Петрович",
    age: 20,
    city: "Калининград",
    type: "Фотограф",
    biography:
      "Андрей с давних времён увлекается фотографией, ещё будучи ребёнком его интересовала работа с плёночными аппаратми и проявление фотографий. Что-то ешё",
    works: [
      {
        name: "Солнечный закат",
        date: "2015-07-20",
        description: "Солнечный закат на фоне деревьев",
        media: [
          "https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg",
          "http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg",
        ],
      },
    ],
    contacts: {
      email: "art@art.com",
      phone: "+71234567890",
    },
  },
  {
    name: "Викторов Андрей Петрович",
    age: 20,
    city: "Калининград",
    type: "Фотограф",
    biography:
      "Андрей с давних времён увлекается фотографией, ещё будучи ребёнком его интересовала работа с плёночными аппаратми и проявление фотографий. Что-то ешё",
    works: [
      {
        name: "Солнечный закат",
        date: "2015-07-20",
        description: "Солнечный закат на фоне деревьев",
        media: [
          "https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg",
          "http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg",
        ],
      },
    ],
    contacts: {
      email: "art@art.com",
      phone: "+71234567890",
    },
  },
  {
    name: "Викторов Андрей Петрович",
    age: 20,
    city: "Калининград",
    type: "Фотограф",
    biography:
      "Андрей с давних времён увлекается фотографией, ещё будучи ребёнком его интересовала работа с плёночными аппаратми и проявление фотографий. Что-то ешё",
    works: [
      {
        name: "Солнечный закат",
        date: "2015-07-20",
        description: "Солнечный закат на фоне деревьев",
        media: [
          "https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg",
          "http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg",
        ],
      },
    ],
    contacts: {
      email: "art@art.com",
      phone: "+71234567890",
    },
  },
  {
    name: "Викторов Андрей Петрович",
    age: 20,
    city: "Калининград",
    type: "Фотограф",
    biography:
      "Андрей с давних времён увлекается фотографией, ещё будучи ребёнком его интересовала работа с плёночными аппаратми и проявление фотографий. Что-то ешё",
    works: [
      {
        name: "Солнечный закат",
        date: "2015-07-20",
        description: "Солнечный закат на фоне деревьев",
        media: [
          "https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg",
          "http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg",
        ],
      },
    ],
    contacts: {
      email: "art@art.com",
      phone: "+71234567890",
    },
  },
]
