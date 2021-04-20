type TArtist = {
  name: string;
  age: number;
  genre?: string;
  city?: string;
  type?: string;
  biography?: string;
  works: TArtistWork[];
  media?: TMedia[];
  contacts?: TContacts;
};

type TMedia = {
  url: string;
  type: 'image' | 'video';
  description?: string;
};

type TArtistWork = {
  genre: string;
  media: TMedia[];
  name?: string;
  date?: string;
  description?: string;
};

type TContacts = {
  phone?: string;
  email?: string;
  instagram?: string;
  telegram?: string;
  vk?: string;
};

export const mockData: TArtist[] = [
  {
    name: 'Викторов Андрей Петрович',
    age: 20,
    city: 'Калининград',
    type: 'Фотограф',
    biography:
      'Андрей с давних времён увлекается фотографией, ещё будучи ребёнком его интересовала работа с плёночными аппаратми и проявление фотографий. Что-то ешё',
    works: [
      {
        name: 'Солнечный закат',
        date: '2015-07-20',
        description: 'Солнечный закат на фоне деревьев',
        genre: 'Живопись',
        media: [
          {
            url: 'https://art-stock.ru/image/cache/catalog/Flowers/MF-141-5-1000x660.jpg',
            type: 'image',
            description: 'Цветочки цветочные',
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
