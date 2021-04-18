import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';
import Sign from '@/components/Sign';

type Props = {
  onClick: MouseEventHandler;
  sign: TicTacToe.Sign;
};

const CustomTd = styled.td`
  width: 20vh;
  height: 20vh;
  border: #000000 solid;
  text-align: center;
  font-size: 7rem;
`;

export default function Cell(props: Props): ReactElement {
  return (
    <CustomTd onClick={props.onClick}>
      <Sign sign={props.sign}></Sign>
    </CustomTd>
  );
}
