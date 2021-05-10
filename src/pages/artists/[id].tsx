import React from 'react';

import artistsJSON from '@data/artists.json';
import type { TArtist } from '@data/types';
import { ArtistTemplate } from '@ui/templates';

type Props = {
  location: any;
};

export const ArtistDetails: React.FC<Props> = ({ location }) => {
  const splitPath = location?.pathname?.split('/');
  const id = Number(splitPath[splitPath.length - 1]);
  //@ts-ignore
  const works: Record<string, TArtist> = artistsJSON;
  const data = works?.[id];

  if (!id || !data) {
    return <p>Ooops :(</p>;
  }
  return (
    <ArtistTemplate
      name={data.name}
      age={data.age}
      biography={data.biography}
      genre={data.genre}
      email={data.email}
      vk={data.vk}
      instagram={data.instagram}
    />
  );
};

export default ArtistDetails;
