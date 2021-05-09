import React from 'react';
import styled from 'styled-components';
import { QrCodeItem } from '@ui/atoms/qr-code-item/qr-code-item';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 50mm);
  grid-template-rows: repeat(4, 50mm);
  gap: 4mm;
  padding-top: 8mm;
  padding-left: 4mm;
  page-break-before: always;
`;

const MAX_ITEM_PER_PAGE = 24;

type Props = {
  data: {
    value: string;
    codeId?: number;
  }[];
};

export const QrCodeList: React.FC<Props> = ({ data }) => {
  const pageAmount = Math.ceil(data.length / MAX_ITEM_PER_PAGE);
  const pages = [...Array(pageAmount).keys()].map(item =>
    data.slice(item * MAX_ITEM_PER_PAGE, item * MAX_ITEM_PER_PAGE + MAX_ITEM_PER_PAGE),
  );
  return (
    <>
      {pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          <Grid>
            {page.map((item, index) => (
              <React.Fragment key={index}>
                <QrCodeItem value={item.value} codeId={item.codeId} />
              </React.Fragment>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};
