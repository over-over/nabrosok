import React from 'react';
import styled from 'styled-components';

import { Container, PageWrapper, Typography } from '@ui/atoms';

const BackgroundText = styled(Typography)`
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  word-break: break-word;
`;
const StyledContainer = styled(Container)`
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
`;

type Props = {
  text?: string;
};

export const NoDataTemplate: React.FC<Props> = ({ text }) => {
  return (
    <PageWrapper>
      <StyledContainer>
        <BackgroundText variant="h3">Ничего не найдено :(</BackgroundText>
        {text && (
          <BackgroundText variant="body1" mt={3}>
            {text}
          </BackgroundText>
        )}
      </StyledContainer>
    </PageWrapper>
  );
};
