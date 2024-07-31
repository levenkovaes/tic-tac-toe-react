import React, { useState } from "react";
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

  let gameStatus: JSX.Element = (
    <>
      Player: <span className="turn">{turn}</span>
    </>
  );

  const handleClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    i: number
  ) => void = (e, i) => {
    setStepsCount((sc) => sc + 1);

    setSquaresContent((sc) => {
      if (calculateWinner(squaresContent)) {
        return sc;
      }

      if (stepsCount % 2 === 1) {
        setTurn("○");
      } else {
        setTurn("×");
      }

      return sc.map((content, index) => (index === i ? turn : content));
    });
  };

  const winner = calculateWinner(squaresContent);

  if (winner) {
    gameStatus = (
      <span className="accent">
        Winner: <span className="turn">{winner.winner}</span>
      </span>
    );
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
        winnerSquares={winner?.squares}
        squaresContent={squaresContent}
        handleClick={handleClick}
      />
      <p className="game-status">{gameStatus}</p>
      <button className="start-btn" onClick={handleStartAgain}>
        Start again
      </button>
    </div>
  );
};
