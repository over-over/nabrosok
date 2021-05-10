import React from 'react';

import { worksData } from '@data/data';
import type { TArtistWork } from '@data/types';
import { WorkTemplate } from '@ui/templates';

type Props = {
  work: TArtistWork;
};

export const WorkDetails: React.FC<Props> = ({ work = worksData[0] }) => {
  return (
    <WorkTemplate
      artistId={work.artistId}
      year={work.year}
      imageUrl={work.imageUrl}
      description={work.description}
      genre={work.genre}
      name={work.name}
    />
  );
};

export default WorkDetails;
