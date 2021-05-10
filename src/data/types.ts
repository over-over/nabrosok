export type TArtist = {
  id: number;
  name: string;
  age: number;
  genre?: string;
  biography?: string;
  works: TArtistWork[];
  media?: TMedia[];
  contacts?: TContacts;
};

export type TMedia = {
  url: string;
  type: 'image' | 'video';
};

export type TArtistWork = {
  id: number;
  artistId: number;
  genre?: string;
  imageUrl: string;
  name?: string;
  year?: string;
  description?: string;
};

export type TContacts = {
  phone?: string;
  email?: string;
  instagram?: string;
  telegram?: string;
  vk?: string;
};
