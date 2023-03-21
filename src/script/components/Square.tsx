import { ISquare } from "./types";

export function Square({ value, handleClick, squaresContent }: ISquare) {
  return (
    <button disabled={!!value} className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
