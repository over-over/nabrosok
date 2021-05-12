import React from 'react';
import styled from 'styled-components';

import { Container, PageWrapper, Typography } from '@ui/atoms';

const ContentWrapper = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)}px;
`;
const PhotoWrapper = styled.div`
  height: 480px;
  max-width: 480px;
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
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  word-break: break-word;
`;

type Props = {
  imageUrl: string;
  artistId: number;
  name?: string;
  description?: string;
  genre?: string;
  year?: string;
};

export const WorkTemplate: React.FC<Props> = ({
  imageUrl,
  artistId,
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
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};
