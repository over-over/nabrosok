import artists from './input/artists.json';

interface TArtistData {
  id: number;
  name?: string;
  age?: number;
  genre?: string;
  biography?: string;
  email?: string;
  vk?: string;
  instagram?: string;
  media?: string;
  link: string;
}

type TTableColumns =
  | 'Имя (Ф.И. или псевдоним)'
  | 'Возраст'
  | 'Жанр'
  | 'О себе'
  | 'Медиа (Ссылка на папку гугл диска со своими фото или видео)'
  | 'Email'
  | 'VK (полная ссылка)'
  | 'Instagram (ник)'
  | 'Автогенерируемая ссылка на художника (НЕ ЗАПОЛНЯТЬ)'
  | 'Автогенерируемый ID художника (НЕ ЗАПОЛНЯТЬ)';

type TArtistsFields = Record<TTableColumns, keyof TArtistData>;

const mapKeys: TArtistsFields = {
  'Имя (Ф.И. или псевдоним)': 'name',
  Возраст: 'age',
  Жанр: 'genre',
  'О себе': 'biography',
  'Медиа (Ссылка на папку гугл диска со своими фото или видео)': 'media',
  Email: 'email',
  'VK (полная ссылка)': 'vk',
  'Instagram (ник)': 'instagram',
  'Автогенерируемая ссылка на художника (НЕ ЗАПОЛНЯТЬ)': 'link',
  'Автогенерируемый ID художника (НЕ ЗАПОЛНЯТЬ)': 'id',
};


// const result = artists.map(item => {
//   const keys = Object.keys(item) as TTableColumns[];
//   // const artist = keys.reduce((key, acc: TArtistData[]) => {
//   //   // acc[mapKeys[key]] =
//   //   // return acc
//   //   const newKey = mapKeys[key];
//   //   acc[newKey] = item[key];
//   //   return acc;
//   // }, {} as TArtistData);
// });
