import React from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.palette.primary};
  ${({ theme }) => css(theme.typography.button)}
`;

type Props = {};

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
