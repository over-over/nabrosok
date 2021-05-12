import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  max-width: 700px;
  padding: ${({ theme }) => theme.spacing(2)}px 0 ${({ theme }) => theme.spacing(4)}px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
