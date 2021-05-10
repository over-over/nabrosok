import React from 'react';
import styled, { useTheme, css } from 'styled-components';

import { SPACING_SIZE } from '@ui/theme/helpers';

import { TTextVariant } from './types';

const StyledText = styled.p<{ styles?: React.CSSProperties }>`
  ${({ styles }) => styles && css({ ...styles })}
`;

const variantMap: Record<TTextVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'p',
  overline: 'span',
};

type TTextMargin = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  m?: number;
};

const marginMap: Record<keyof TTextMargin, string> = {
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mx: 'margin',
  my: 'margin',
  m: 'margin',
};

type TCSSMargins = Pick<
  React.CSSProperties,
  'margin' | 'marginRight' | 'marginLeft' | 'marginBottom' | 'marginTop'
>;

const getMargins = (margins: TTextMargin) => {
  const data = Object.entries(margins).reduce(
    (acc, item: [string, number | undefined]) => {
      const [key, value] = item;
      if (value) {
        const pixels = `${value * SPACING_SIZE}px`;
        const cssPrefix = marginMap[key as keyof TTextMargin];
        let marginValue = '';
        switch (true) {
          case key === 'mx': {
            marginValue = `0 ${pixels}`;
            break;
          }
          case key === 'my': {
            marginValue = `${pixels} 0`;
            break;
          }
          default: {
            marginValue = pixels;
          }
        }
        return { ...acc, [cssPrefix]: marginValue };
      }
      return acc;
    },
    {} as any,
  );
  return data as TCSSMargins;
};

type Props = {
  variant?: TTextVariant;
  color?: string;
} & TTextMargin;

export const Typography: React.FC<Props> = ({
  variant = 'body2',
  color,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  m,
  children,
  ...props
}) => {
  const theme = useTheme();
  const textTag = variantMap[variant] as keyof JSX.IntrinsicElements;
  const textStyles = theme.typography[variant] as React.CSSProperties;
  const textColor = color ?? textStyles.color;

  const margins = getMargins({ mt, mb, ml, mr, mx, my, m });
  const styles = { ...textStyles, color: textColor, ...margins };

  return (
    <StyledText styles={styles} as={textTag} {...props}>
      {children}
    </StyledText>
  );
};
