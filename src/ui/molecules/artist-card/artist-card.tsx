import { Typography } from '@ui/atoms';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.palette.border.dark};
  padding: ${({ theme }) => theme.spacing(2)}px;
`;
const NameText = styled(Typography)`
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  word-break: break-word;
`;
const LinkText = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  word-break: break-word;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

type Props = {
  id: number;
  name: string;
  biography?: string;
};

export const ArtistCard: React.FC<Props> = ({ id, name, biography }) => {
  return (
    <Wrapper>
      <NameText variant="h4" mb={2}>
        {name}
      </NameText>
      {biography && (
        <Typography mb={2} numberOfLines={3}>
          {biography}
        </Typography>
      )}
      <LinkText href={`/nabrosok/artists/${id}`}>
        <Typography variant="subtitle1">Ещё об авторе 👀</Typography>
      </LinkText>
    </Wrapper>
  );
};
