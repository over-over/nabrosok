import React from 'react';

import { declFormatters } from '@shared/utils';
import { artistsData } from '@data/data';
import type { TArtist } from '@data/types';

type Props = {
  artist: TArtist;
};

export const ArtistDetails: React.FC<Props> = ({ artist = artistsData[0] }) => {
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
      <div>{artist.works.map(item => item.name)}</div>
      <div>
        {artist.contacts?.email && (
          <a href={artist.contacts.email}>{artist.contacts.email}</a>
        )}
        {artist.contacts?.phone && (
          <a href={'tel:' + artist.contacts.phone}>{artist.contacts.phone}</a>
        )}
        {artist.contacts?.instagram && (
          <a href={artist.contacts.instagram}>{artist.contacts.instagram}</a>
        )}
        {artist.contacts?.vk && <a href={artist.contacts.vk}>{artist.contacts.vk}</a>}
        {artist.contacts?.telegram && (
          <a href={artist.contacts.telegram}>{artist.contacts.telegram}</a>
        )}
      </div>
    </div>
  );
};

export default ArtistDetails;
