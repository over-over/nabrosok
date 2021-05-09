import { QrCodeList } from '@ui/molecules/qr-code-list/qr-code-list';
import React from 'react';

const LINK_PREFIX = 'https://over-over.github.io/nabrosok/works/';
const START_ID = 2;
const END_ID = 216;

const data = [...Array(END_ID - START_ID + 1).keys()].map(item => {
  const id = item + START_ID;
  const link = LINK_PREFIX + id;
  return {
    value: link,
    codeId: id,
  };
});

type Props = {};

export const Qr: React.FC<Props> = ({}) => {
  return <QrCodeList data={data} />;
};

export default Qr;
