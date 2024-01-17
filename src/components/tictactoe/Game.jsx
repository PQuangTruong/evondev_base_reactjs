import React, { useReducer } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helper";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// immutable: ko the chinh sua
// [...arr] {obj}
// deep copy JSON.parse(JSON.stringify(obj))

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      // boardCopy[index] = state.xIsNext ? "X" : "O";
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // useReducer
  //
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [state, dispatch] = useReducer(gameReducer, initialState);

  // const action = {type: 'CLICK', payload: {}}

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   name: "HelloWorld",
  // });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;

    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });

    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
    // console.log(state);
    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);
  };
  const handleResetBoard = () => {
    // setBoard(Array(9).fill(null));
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game_winner">Winner is {winner}</div>}
      <button className="game_reset" onClick={handleResetBoard}>
        Reset Button
      </button>
    </div>
  );
};

export default Game;
