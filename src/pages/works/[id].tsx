import React from 'react';

import { TArtistWork } from '@data/types';

type Props = {
  work: TArtistWork;
};

export const WorkDetails: React.FC<Props> = ({ work }) => {
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
