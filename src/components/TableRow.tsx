import React, { MouseEventHandler, ReactElement } from 'react';
import Cell from '@/components/Cell';

type Props = {
  onClick: (column: number) => MouseEventHandler;
  signs: TicTacToe.Sign[];
};

export default function TableRow(props: Props): ReactElement {
  return (
    <tr>
      {props.signs.map((sign, index) => (
        <Cell key={index} sign={sign} onClick={props.onClick(index)} />
      ))}
    </tr>
  );
}
