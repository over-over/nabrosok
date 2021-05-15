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
`;

type Props = {};

export const IndexPage: React.FC<Props> = ({}) => {
  return (
    <PageWrapper>
      <Container>
        <ContentWrapper>
          <BackgroundText variant="h2">
            Добро пожаловать на фестиваль «Набросок»
          </BackgroundText>
          <BackgroundText mt={2}>
            Вы можете ознакомиться с информацией о работах и художниках, отсканировав
            QR-коды с выставки
          </BackgroundText>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};

export default IndexPage;
