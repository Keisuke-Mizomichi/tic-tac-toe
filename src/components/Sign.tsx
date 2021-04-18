import React, { ReactElement } from 'react';

type Props = {
  sign: TicTacToe.Sign;
};

export default function Sign(props: Props): ReactElement {
  /**
   * 1 | 0 | -1 を '○' | '' | '✕' に変換する
   */
  const mapSign = (sign: TicTacToe.Sign): string => {
    if (sign === 1) {
      return '○';
    }
    if (sign === 0) {
      return '';
    }
    return '×';
  };

  return <>{mapSign(props.sign)}</>;
}
