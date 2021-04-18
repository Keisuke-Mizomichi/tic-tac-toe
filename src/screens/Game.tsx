import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Table from '@/components/Table';

const table: TicTacToe.Sign[][] = [
  [0, 1, -1],
  [0, 0, -1],
  [1, -1, 1],
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

export default function Game(): ReactElement {
  return (
    <Container>
      <Table table={table}></Table>
    </Container>
  );
}
