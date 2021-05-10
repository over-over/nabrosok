import React from 'react';

import { declFormatters } from '@shared/utils';
import { artistsData } from '@data/data';
import type { TArtist } from '@data/types';
import styled from 'styled-components';
import { ArtistTemplate } from '@ui/templates';

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
    <ArtistTemplate
      name={artist.name}
      age={artist.age}
      biography={artist.biography}
      genre={artist.genre}
    />
  );
};

export default ArtistDetails;
