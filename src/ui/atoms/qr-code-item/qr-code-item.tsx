import React from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CodeIdWrapper = styled.div`
  position: absolute;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 45px;
  height: 45px;
  /* background-color: ${({ theme }) => theme.palette.common.white}; */
  z-index: 1;
`;
const CodeIdText = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: monospace;
`;

type Props = {
  value: string;
  codeId?: number;
};

export const QrCodeItem: React.FC<Props> = ({ value, codeId }) => {
  return (
    <Wrapper>
      <QRCode
        value={value}
        size={180}
        bgColor={'#ffffff'}
        fgColor={'#000000'}
        level={'Q'}
        includeMargin={false}
        renderAs={'svg'}
        imageSettings={{
          src: '',
          x: undefined,
          y: undefined,
          height: 45,
          width: 45,
          excavate: true,
        }}
      />
      {codeId && (
        <CodeIdWrapper>
          <CodeIdText>{String(codeId).padStart(3, '0')}</CodeIdText>
        </CodeIdWrapper>
      )}
    </Wrapper>
  );
};
