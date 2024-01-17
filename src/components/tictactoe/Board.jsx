import React from "react";
import Cell from "./Cell";
//import { calculateWinner } from "../../helper";

const Board = (props) => {
  // const cells = [null, null, null, "X", "X", "X", null, null, null];
  // console.log(calculateWinner(cells));
  return (
    <div className="game_board">
      {props.cells.map((item, index) => (
        <Cell 
          key={index} 
          value={item} 
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is_x" : item === "O" ? "is_o" : " "}
          >
        </Cell>
      ))}
    </div>
  );
};

export default Board;
