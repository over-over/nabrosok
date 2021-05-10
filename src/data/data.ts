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
        year: '2015',
        description: 'Солнечный закат на фоне деревьев',
        genre: 'Живопись',
        imageUrl: 'http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg',
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
    year: '2015',
    description: 'Солнечный закат на фоне деревьев',
    genre: 'Живопись',
    imageUrl: 'http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg',
  },
  {
    id: 1,
    artistId: 2,
    name: 'Солнечный закат',
    year: '2019',
    description: 'Солнечный закат на фоне деревьев',
    genre: 'Живопись',
    imageUrl: 'http://ae01.alicdn.com/kf/H633f6a54f8624ff2a5c6a8f2388fbbffU/-.jpg',
  },
];
