import React from 'react';

import worksJSON from '@data/works.json';
import artistsJSON from '@data/artists.json';
import type { TArtistWork, TArtist } from '@data/types';
import { WorkTemplate } from '@ui/templates';

type Props = {
  location: any;
};

export const WorkDetails: React.FC<Props> = ({ location }) => {
  const splitPath = location?.pathname?.split('/');
  const id = Number(splitPath[splitPath.length - 1]);
  //@ts-ignore
  const works: Record<string, TArtistWork> = worksJSON;
  const data = works?.[id];

  if (!id || !data) {
    return <p>Ooops :(</p>;
  }
  //@ts-ignore
  const artist: TArtist | undefined = artistsJSON[data.artistId];
  const artistData = artist
    ? {
        id: artist.id,
        name: artist.name,
        biography: artist.biography,
      }
    : undefined;
  const image = `/nabrosok/work-${data.id}.jpg`;

  return (
    <WorkTemplate
      artistData={artistData}
      year={data.year}
      imageUrl={image}
      description={data.description}
      genre={data.genre}
      name={data.name}
    />
  );
};

export default WorkDetails;
