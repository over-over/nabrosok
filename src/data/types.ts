export type TArtist = {
  id: number;
  name: string;
  age: number;
  genre?: string;
  biography?: string;
  email?: string;
  instagram?: string;
  vk?: string;
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
