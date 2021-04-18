export class Store {
  private table: TicTacToe.Sign[][];
  constructor() {
    this.table = [];
    this.init();
  }
  public init(n = 3): void {
    this.table = new Array(n).fill(null).map(() => new Array(n).fill(0));
  }
  public get(): TicTacToe.Sign[][] {
    return this.table;
  }
  public set(row: number, column: number, sign: TicTacToe.Sign): void {
    this.table[row][column] = sign;
  }
}
