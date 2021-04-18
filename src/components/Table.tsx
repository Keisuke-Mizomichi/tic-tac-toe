import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';
import TableRow from '@/components/TableRow';

type Props = {
  onClick: (row: number) => (column: number) => MouseEventHandler;
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
          <TableRow key={index} signs={signs} onClick={props.onClick(index)} />
        ))}
      </tbody>
    </CustomTable>
  );
}
