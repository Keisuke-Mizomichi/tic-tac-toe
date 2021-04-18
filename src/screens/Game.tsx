import React, { ReactElement, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import Sign from '@/components/Sign';
import Table from '@/components/Table';
import { judge } from '@/judge';
import store from '@/stores/store';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const WinnerContainer = styled.div`
  font-size: 5rem;
`;

export default function Game(): ReactElement {
  const [table, setTable] = useState<TicTacToe.Sign[][]>(store.get());
  const [player, setPlayer] = useState<TicTacToe.Sign>(1);
  const [winner, setWinner] = useState(0);

  const onClick: (row: number) => (column: number) => MouseEventHandler = (
    row
  ) => (column) => () => {
    if (winner) return;
    if (table[row][column]) return;
    store.set(row, column, player);
    setTable((newTable) => newTable);
    setWinner(judge(table));
    setPlayer(-1 * player);
  };

  const reset = () => {
    store.init();
    setTable(store.get());
    setWinner(0);
    setPlayer(1);
  };

  return (
    <>
      <button onClick={reset}>最初からプレイ</button>
      <Container>
        <Table table={table} onClick={onClick}></Table>
      </Container>
      <WinnerContainer>
        {winner !== 0 && (
          <>
            <Sign sign={winner} />
            の勝ち
          </>
        )}
      </WinnerContainer>
    </>
  );
}
