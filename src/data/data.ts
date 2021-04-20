import type { TArtist, TArtistWork } from './types';

export const artistsData: TArtist[] = [
  {
    name: 'Викторов Андрей Петрович',
    id: 0,
    age: 20,
    genre: 'Фотография',
    biography:
      'Андрей с давних времён увлекается фотографией, ещё будучи ребёнком его интересовала работа с плёночными аппаратми и проявление фотографий. Что-то ешё',
    works: [
      {
        id: 0,
        artistId: 0,
        name: 'Солнечный закат',
        date: '2015-07-20',
        description: 'Солнечный закат на фоне деревьев',
        genre: 'Живопись',
        media: [
          {
            url: 'https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg',
            type: 'image',
          },
          {
            url: 'http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg',
            type: 'image',
          },
        ],
      },
    ],
    contacts: {
      email: 'art@art.com',
      phone: '+71234567890',
    },
  },
];

export const worksData: TArtistWork[] = [
  {
    id: 0,
    artistId: 0,
    name: 'Солнечный закат',
    date: '2015-07-20',
    description: 'Солнечный закат на фоне деревьев',
    genre: 'Живопись',
    media: [
      {
        url: 'https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg',
        type: 'image',
      },
      {
        url: 'http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg',
        type: 'image',
      },
    ],
  },
  {
    id: 1,
    artistId: 2,
    name: 'Солнечный закат',
    date: '2015-07-20',
    description: 'Солнечный закат на фоне деревьев',
    genre: 'Живопись',
    media: [
      {
        url: 'https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg',
        type: 'image',
      },
      {
        url: 'http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg',
        type: 'image',
      },
    ],
  },
];
