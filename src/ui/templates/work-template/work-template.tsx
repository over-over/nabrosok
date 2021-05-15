import React from 'react';
import styled from 'styled-components';

import { Container, PageWrapper, Typography } from '@ui/atoms';
import { ArtistCard } from '@ui/molecules';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
`;
const PhotoWrapper = styled.div`
  height: 420px;
  max-width: 420px;
  margin: 0 auto ${({ theme }) => theme.spacing(2)}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 320px;
  }
`;
const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const NameText = styled(Typography)`
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  word-break: break-word;
`;

type Props = {
  imageUrl: string;
  name?: string;
  description?: string;
  genre?: string;
  year?: string;
  artistData?: {
    id: number;
    name: string;
    biography?: string;
  };
};

export const WorkTemplate: React.FC<Props> = ({
  imageUrl,
  artistData,
  name = 'Без названия',
  description,
  genre,
  year,
}) => {
  return (
    <PageWrapper>
      <Container>
        <ContentWrapper>
          {imageUrl && (
            <PhotoWrapper>
              <PhotoImage src={imageUrl} alt={name} />
            </PhotoWrapper>
          )}
          <NameText variant="h2" mb={3}>
            {name}
          </NameText>
          {genre && (
            <Typography variant="caption" mb={2}>
              Жанр: {genre}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" mb={1}>
              {description}
            </Typography>
          )}
          {year && (
            <Typography variant="caption" mb={2}>
              {year}г.
            </Typography>
          )}
          {artistData && (
            <>
              <div style={{ height: 80 }} />
              <ArtistCard
                id={artistData.id}
                name={artistData.name}
                biography={artistData.biography}
              />
            </>
          )}
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};
