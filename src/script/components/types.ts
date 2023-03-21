import { MouseEventHandler } from "react";

export interface ISquare {
  value?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  squaresContent: string[];
}
