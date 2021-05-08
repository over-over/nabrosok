import React from 'react';

import { worksData } from '@data/data';
import type { TArtistWork } from '@data/types';

type Props = {
  work: TArtistWork;
};

export const WorkDetails: React.FC<Props> = ({ work = worksData[0] }) => {
  return (
    <div>
      <div>
        {work.media?.map((item, index) => {
          if (item.type === 'image') {
            return <img src={item.url} alt={'img-' + index} />;
          } else {
            return <video src={item.url} />;
          }
        })}
      </div>
      <p>{work.name}</p>
      <p>{work.genre}</p>
      <p>{work.description}</p>
      <p>{work.date}</p>
    </div>
  );
};

export default WorkDetails;
