import React, { ReactElement } from 'react';
import Cell from '@/components/Cell';

type Props = {
  signs: TicTacToe.Sign[];
};

export default function TableRow(props: Props): ReactElement {
  return (
    <tr>
      {props.signs.map((sign, index) => (
        <Cell key={index} sign={sign} />
      ))}
    </tr>
  );
}
