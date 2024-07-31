export interface ISquare {
  accent: string;
  value: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ISquareContainer {
  winnerSquares: number[] | undefined;
  squaresContent: string[];
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    i: number
  ) => void;
}
