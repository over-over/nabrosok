import React from 'react';
import styled from 'styled-components';

import { Container, PageWrapper, Typography } from '@ui/atoms';
import { declFormatters } from '@shared/utils';

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
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  word-break: break-word;
`;

type Props = {
  name: string;
  age?: number;
  genre?: string;
  biography?: string;
  email?: string;
  vk?: string;
  instagram?: string;
};

export const ArtistTemplate: React.FC<Props> = ({
  name,
  age,
  genre,
  biography,
  email,
  vk,
  instagram,
}) => {
  return (
    <PageWrapper>
      <Container>
        <ContentWrapper>
          {/* <PhotoWrapper>
            Тут будет видео-карточка или ничего :)
            <PhotoImage
              src="https://cdn1.flamp.ru/6d7599452548820411ed077c7d097c42.jpg"
              alt={name}
            />
          </PhotoWrapper> */}
          <NameText variant="h3" mb={2}>
            {name}
          </NameText>
          {age && (
            <Typography variant="body2" mt={2} mb={1}>
              {age} {declFormatters.age(age)}
            </Typography>
          )}
          <Typography variant="caption" mb={2}>
            Жанр: {genre}
          </Typography>
          {biography && <Typography variant="body1">{biography}</Typography>}
          <div>
            {email && <a href={email}>{email}</a>}
            {instagram && <a href={instagram}>{instagram}</a>}
            {vk && <a href={vk}>{vk}</a>}
          </div>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};
