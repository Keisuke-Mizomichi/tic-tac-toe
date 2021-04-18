import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Sign from '@/components/Sign';

type Props = {
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
    <CustomTd>
      <Sign sign={props.sign}></Sign>
    </CustomTd>
  );
}
