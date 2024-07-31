import { ISquare } from "./types";

export const Square = ({ accent, value, handleClick }: ISquare) => {
  return (
    <button
      disabled={!!value}
      className={`square ${accent}`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};
