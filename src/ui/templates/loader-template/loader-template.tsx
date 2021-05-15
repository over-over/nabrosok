import React from 'react';
import styled from 'styled-components';

import { Container, PageWrapper, Typography } from '@ui/atoms';
import { IconSpinner } from '@ui/icons/icon-spinner';

const BackgroundText = styled(Typography)`
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  word-break: break-word;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

type Props = {};

export const LoaderTemplate: React.FC<Props> = ({}) => {
  return (
    <PageWrapper>
      <Container>
        <ContentWrapper>
          <IconSpinner />
          <BackgroundText variant="subtitle2" mt={2}>
            Подождите...
          </BackgroundText>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};
