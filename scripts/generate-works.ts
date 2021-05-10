const fs = require('fs');
const nodeFetch = require('node-fetch');

const GSlink =
  'https://gsx2json.com/api?id=1bCDWSG2fBDbZURr2u_n6psaQkGmKdXz3ZytGYixTI9Y&sheet=2';

type TGSWorksResponse = {
  columns: {
    artist: string[];
    year: (number | 0)[];
    imageurl: (string | 0)[];
    name: (string | 0)[];
    genre: (string | 0)[];
    description: (string | 0)[];
    workid: number;
  };
  rows: {
    artist: string;
    workid: number;
    year: number | 0;
    imageurl: string | 0;
    name: string | 0;
    genre: string | 0;
    description: string | 0;
  }[];
};

type TArtistWork = {
  id: number;
  artistId: number;
  genre?: string;
  imageUrl: string;
  name?: string;
  year?: string;
  description?: string;
};

type TArtistWorkData = Record<number, TArtistWork>;

const requestData = async () => {
  try {
    const sheetJSON: TGSWorksResponse = await (await nodeFetch(GSlink)).json();
    const mappedData: TArtistWorkData = sheetJSON.rows.reduce((acc, item) => {
      const splitUrl = item.artist.split(':');
      const id = Number(splitUrl[splitUrl.length - 1]);
      const result: TArtistWork = {
        artistId: id,
        id: item.workid,
        genre: item.genre === 0 ? undefined : item.genre,
        name: item.name === 0 ? 'Без названия' : item.name,
        imageUrl: item.imageurl === 0 ? '' : item.imageurl,
        description: item.description === 0 ? undefined : item.description,
        year: item.year === 0 ? undefined : String(item.year),
      };
      return { ...acc, [item.workid]: result };
    }, {});
    fs.writeFileSync(__dirname + '/../src/data/works.json', JSON.stringify(mappedData));
    console.log('DONE!: Saved works to @src/data/works.json');
  } catch (e) {
    console.error(e);
  }
};

requestData();
