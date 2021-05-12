const imagesFs = require('fs');
const request = require('request');
const imagesFetch = require('node-fetch');

const GSImagelink =
  'https://gsx2json.com/api?id=1bCDWSG2fBDbZURr2u_n6psaQkGmKdXz3ZytGYixTI9Y&sheet=2';

const replaceLink = (link: string) => {
  const id = link.split('/')[5];
  const result = 'https://drive.google.com/uc?export=download&id=' + id;
  return result;
};

type TGSImagesResponse = {
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

type TImageData = {
  id: number;
  link: string;
};

const download = (url: string, path: string, callback: () => void) => {
  request.head(url, (_, __, ___) => {
    request(url).pipe(imagesFs.createWriteStream(path)).on('close', callback);
  });
};

let globalIndex = 99;
let images: TImageData[] = [];

const callb = () => {
  console.log('✅ Done!', globalIndex);
  globalIndex++;
  const newItem = images[globalIndex];
  if (newItem) {
    download(replaceLink(newItem.link), `../static/work-${newItem.id}.jpg`, callb);
  }
};

const requestImageData = async () => {
  try {
    const sheetJSON: TGSImagesResponse = await (await imagesFetch(GSImagelink)).json();
    const mappedData: TImageData[] = sheetJSON.rows.reduce((acc, item) => {
      if (item.imageurl) {
        const result: TImageData = {
          id: item.workid,
          link: item.imageurl,
        };
        return [...acc, result];
      }
      return acc;
    }, []);
    images = mappedData;
    const newItem = images[globalIndex];
    download(replaceLink(newItem.link), `../static/work-${newItem.id}.jpg`, callb);
  } catch (e) {
    console.error(e);
  }
};

requestImageData();
