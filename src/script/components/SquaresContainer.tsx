import React from "react";
import { Square } from "./Square";
import { v4 as uuidv4 } from "uuid";
import { ISquare } from "./types";

export const SquaresContainer = ({
  value,
  handleClick,
  squaresContent,
}: ISquare) => {
  let squares = [];

  for (let i = 0; i < 9; ++i) {
    squares.push(
      <Square
        squaresContent={squaresContent}
        key={uuidv4()}
        value={squaresContent[i]}
        handleClick={() => {
          //@ts-ignore
          handleClick(i);
        }}
      />
    );
  }

  return <div className="squares-container">{squares}</div>;
};
