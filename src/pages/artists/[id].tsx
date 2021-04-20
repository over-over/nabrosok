import React from 'react';

import { declFormatters } from '@shared/utils';
import type { TArtist } from '@data/types';

type Props = {
  artist: TArtist;
};

export const ArtistDetails: React.FC<Props> = ({ artist }) => {
  return (
    <div>
      {artist.media?.map((item, index) => {
        if (item.type === 'image') {
          return <img src={item.url} alt={'img-' + index} />;
        } else {
          return <video src={item.url} />;
        }
      })}
      <h1>{artist.name}</h1>
      <p>
        {artist.age} {declFormatters.age(artist.age)}
      </p>
      <p>{artist.genre}</p>
      <p>{artist.biography}</p>
    </div>
  );
};
