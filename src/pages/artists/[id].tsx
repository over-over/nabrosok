import React from 'react';

import { declFormatters } from '@shared/utils';
import { artistsData } from '@data/data';
import type { TArtist } from '@data/types';
import styled from 'styled-components';

const PageWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const PageContentWrapper = styled.div`
  height: 100%;
  max-width: 700px;
  margin: auto;
`;

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ theme }) => theme.spacing(2)}px;
`;
const PhotoWrapper = styled.div`
  height: 320px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const NameText = styled.h1`
  display: inline;
  font-size: 32px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
`;

type Props = {
  artist: TArtist;
};

export const ArtistDetails: React.FC<Props> = ({ artist = artistsData[0] }) => {
  return (
    <PageWrapper>
      <PageContentWrapper>
        <ContentWrapper>
          <PhotoWrapper>
            <PhotoImage
              src="https://cdn1.flamp.ru/6d7599452548820411ed077c7d097c42.jpg"
              alt={artist.name}
            />
            {/* {artist.media?.map((item, index) => {
            if (item.type === 'image') {
              return <img src={item.url} alt={'img-' + index} />;
            } else {
              return <video src={item.url} />;
            }
          })} */}
          </PhotoWrapper>
          <NameText>&nbsp;{artist.name}&nbsp;</NameText>
          <p>
            {artist.age} {declFormatters.age(artist.age)}
          </p>
          <p>Жанр: {artist.genre}</p>
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
        </ContentWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
};

export default ArtistDetails;
