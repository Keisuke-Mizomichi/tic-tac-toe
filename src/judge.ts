export const judge = (table: TicTacToe.Sign[][]): TicTacToe.Sign => {
  // row
  for (const row of table) {
    if (row.reduce((prev, curr) => prev + curr) === row.length) {
      return 1;
    }
    if (row.reduce((prev, curr) => prev + curr) === -row.length) {
      return -1;
    }
  }
  // column
  const colSum = table.reduce((pre, cur) => pre.map((v, i) => v + cur[i]));
  if (colSum.some((v) => v === table.length)) {
    return 1;
  }
  if (colSum.some((v) => v === -table.length)) {
    return -1;
  }
  // diagonal
  if (table.length === table[0].length) {
    if (
      table.reduce((pre, cur, i) => {
        const arr = [...pre];
        arr[0] += cur[i];
        return arr;
      })[0] === table.length
    ) {
      return 1;
    }
    if (
      table.reduce((pre, cur, i) => {
        const arr = [...pre];
        arr[0] += cur[i];
        return arr;
      })[0] === -table.length
    ) {
      return -1;
    }
    if (
      table.reduce((pre, cur, i) => {
        const arr = [...pre];
        arr[pre.length - 1] += cur[pre.length - 1 - i];
        return arr;
      })[table.length - 1] === table.length
    ) {
      return 1;
    }
    if (
      table.reduce((pre, cur, i) => {
        const arr = [...pre];
        arr[pre.length - 1] += cur[pre.length - 1 - i];
        return arr;
      })[table.length - 1] === -table.length
    ) {
      return -1;
    }
  }

  // default
  return 0;
};
