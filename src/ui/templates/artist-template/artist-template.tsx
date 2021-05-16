import React from 'react';
import styled from 'styled-components';

import { Container, PageWrapper, Typography } from '@ui/atoms';
import { declFormatters } from '@shared/utils';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
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
const LinksWrapper = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
`;
const Link = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.white};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;
const DescriptionText = styled(Typography)`
  white-space: pre-wrap;
`;

const getYoutubeIframe = (id: string) => (
  <iframe
    width="100%"
    height="360"
    style={{ marginBottom: 32 }}
    src={`https://www.youtube.com/embed/${id}`}
    title="YouTube video player"
    //@ts-ignore
    frameborder="0"
    allowFullScreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  />
);

type Props = {
  name: string;
  age?: number;
  genre?: string;
  biography?: string;
  email?: string;
  vk?: string;
  instagram?: string[];
  youtube?: string;
};

export const ArtistTemplate: React.FC<Props> = ({
  name,
  age,
  genre,
  biography,
  email,
  vk,
  instagram,
  youtube,
}) => {
  const video = youtube ? getYoutubeIframe(youtube) : null;
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
          {video}
          <NameText variant="h3" mb={2}>
            {name}
          </NameText>
          {age && (
            <Typography variant="body2" mt={2} mb={1}>
              {age} {declFormatters.age(age)}
            </Typography>
          )}
          {genre && (
            <Typography variant="caption" mb={2}>
              Жанр: {genre}
            </Typography>
          )}
          {biography && <DescriptionText variant="body1">{biography}</DescriptionText>}
          {email || instagram || vk ? (
            <LinksWrapper>
              <Typography variant="h5" mb={2}>
                Контакты:
              </Typography>
              {email && (
                <Link href={'mailto:' + email}>
                  <NameText variant="subtitle2">{email}</NameText>
                </Link>
              )}
              {instagram?.map(item => (
                <Link href={item}>
                  <NameText variant="subtitle2">{item}</NameText>
                </Link>
              ))}
              {vk && (
                <Link href={vk}>
                  <NameText variant="subtitle2">{vk}</NameText>
                </Link>
              )}
            </LinksWrapper>
          ) : null}
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};
