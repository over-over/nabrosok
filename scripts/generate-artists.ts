const artistFs = require('fs');
const artistFetch = require('node-fetch');

const GSArtistLink =
  'https://gsx2json.com/api?id=1bCDWSG2fBDbZURr2u_n6psaQkGmKdXz3ZytGYixTI9Y&sheet=1';

type TGSArtistsResponse = {
  columns: {
    artistid: number[];
    name: string[];
    age: (number | 0)[];
    genre: (string | 0)[];
    email: (string | 0)[];
    vk: (string | 0)[];
    instagram: (string | 0)[];
    link: (string | 0)[];
    media: (string | 0)[];
    biogrpahy: (string | 0)[];
  };
  rows: {
    artistid: number;
    name: string;
    age: number | 0;
    genre: string | 0;
    email: string | 0;
    vk: string | 0;
    instagram: string | 0;
    link: string | 0;
    media: string | 0;
    biography: string | 0;
  }[];
};

type TArtist = {
  id: number;
  name: string;
  age: number;
  genre?: string;
  biography?: string;
  email?: string;
  instagram?: string;
  vk?: string;
};

type TArtistData = Record<number, TArtist>;

const requestArtistData = async () => {
  try {
    const sheetJSON: TGSArtistsResponse = await (await artistFetch(GSArtistLink)).json();
    const mappedData: TArtistData = sheetJSON.rows.reduce((acc, item) => {
      const instagram =
        item.instagram === 0
          ? undefined
          : 'https://www.instagram.com/' + item.instagram.slice(1);
      const result: TArtist = {
        id: item.artistid,
        name: item.name,
        genre: item.genre === 0 ? undefined : item.genre,
        biography: item.biography === 0 ? undefined : item.biography,
        age: item.age === 0 ? undefined : item.age,
        email: item.email === 0 ? undefined : item.email,
        vk: item.vk === 0 ? undefined : item.vk,
        instagram,
      };
      return { ...acc, [item.artistid]: result };
    }, {});
    artistFs.writeFileSync(
      __dirname + '/../src/data/artists.json',
      JSON.stringify(mappedData),
    );
    console.log('DONE!: Saved artists to @src/data/artists.json');
  } catch (e) {
    console.error(e);
  }
};

requestArtistData();
