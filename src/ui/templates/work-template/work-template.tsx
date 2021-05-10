import React from 'react';
import styled from 'styled-components';

import { Container, PageWrapper, Typography } from '@ui/atoms';

const PhotoWrapper = styled.div`
  height: 320px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const NameText = styled(Typography)`
  display: inline;
  /* font-size: 32px; */
  font-weight: 500;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
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
        {imageUrl && (
          <PhotoWrapper>
            <PhotoImage src={imageUrl} alt={name} />
          </PhotoWrapper>
        )}
        <NameText variant="h1" mb={3}>
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
      </Container>
    </PageWrapper>
  );
};
