import React, { MouseEventHandler, useState } from "react";
import { SquaresContainer } from "./SquaresContainer";
import { calculateWinner } from "./utils";

export const GameContainer = () => {
  const [squaresContent, setSquaresContent] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [stepsCount, setStepsCount] = useState(1);

  const [turn, setTurn] = useState("×");

  let gameStatus = `Player: ${turn}`;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (i) => {
    setStepsCount((sc) => sc + 1);

    setSquaresContent((sc) => {
      const clone = [...sc];
      //@ts-ignore
      if (calculateWinner(squaresContent)) {
        return clone;
      }

      if (stepsCount % 2 === 1) {
        setTurn("○");
      } else {
        setTurn("×");
      }

      //@ts-ignore
      clone[i] = turn;
      return clone;
    });
  };

  const winner = calculateWinner(squaresContent);

  if (winner) {
    gameStatus = "Winner: " + winner;
  }

  const handleStartAgain = () => {
    setSquaresContent(["", "", "", "", "", "", "", "", ""]);
    setStepsCount(1);
    setTurn("×");
  };

  return (
    <div className="game-container">
      <h1>Tic-Tac-Toe</h1>
      <SquaresContainer
        squaresContent={squaresContent}
        handleClick={handleClick}
      />
      <p>{gameStatus}</p>
      <button style={{ marginTop: 20 }} onClick={handleStartAgain}>
        Start again
      </button>
    </div>
  );
};
