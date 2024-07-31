import React from "react";
import { Square } from "./Square";
import { v4 as uuidv4 } from "uuid";
import { ISquareContainer } from "./types";

export const SquaresContainer = ({
  winnerSquares,
  squaresContent,
  handleClick,
}: ISquareContainer) => {
  let squares = [];

  for (let i = 0; i < 9; ++i) {
    squares.push(
      <Square
        accent={winnerSquares?.includes(i) ? "accent" : ""}
        key={uuidv4()}
        value={squaresContent[i]}
        handleClick={(e) => {
          handleClick(e, i);
        }}
      />
    );
  }

  return <div className="squares-container">{squares}</div>;
};
