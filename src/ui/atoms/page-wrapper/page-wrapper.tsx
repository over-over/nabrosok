import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
  overflow-y: auto;
`;
