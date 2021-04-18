import React, { ReactElement } from 'react';
import styled from 'styled-components';
import TableRow from '@/components/TableRow';

type Props = {
  table: TicTacToe.Sign[][];
};

const CustomTable = styled.table`
  border-collapse: collapse;
`;

export default function Table(props: Props): ReactElement {
  return (
    <CustomTable>
      <tbody>
        {props.table.map((signs, index) => (
          <TableRow key={index} signs={signs} />
        ))}
      </tbody>
    </CustomTable>
  );
}
