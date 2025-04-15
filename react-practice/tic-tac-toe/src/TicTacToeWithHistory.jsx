import React, { useState } from "react";
import "./App.css";
//tic tac toe



function Square({ value, onSquareClick, isWinningSquare }) {
  return (
    <button
      onClick={onSquareClick}
      className={`square ${isWinningSquare ? "winning" : ""}`}
    >
      {" "}
      {value}{" "}
    </button>
  );
}

function calculateWinner(squares) {
  //return X or O

  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerCombinations.length; i++) {
    const [a, b, c] = winnerCombinations[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: [] };
}

// [null, null,null, null ,null, null,null, null,null, null]

// [null, null,'X', null ,'O', null,null, null,null, null]

const intialSquares = Array(9).fill(null);

function TicTacToe() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;



  function onSetSquares(nextSquares){

    // update history
    const nextHistory = [...history.slice(0, currentMove + 1),nextSquares ];
    setHistory(nextHistory);
    //update the current move
    setCurrentMove(nextHistory.length  - 1)


  }

  function goToThatMove(nextMove){
    setCurrentMove(nextMove);

  }

  const moves = history.map(function (squares, move) {
    let desc;

    if (move > 0) {
      desc = `Go to move : ${move}`;
    } else {
      desc = `Go to the start`;
    }

    return (
      <li>
        <button onClick={() => goToThatMove(move)} >{desc}</button>
      </li>
    );
  });
  console.log('moves',moves)
  return (
    <div className="game">
      <div className="game-board">
        <Board  squares={currentSquares} xIsNext={xIsNext} onSetSquares={onSetSquares} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Board({squares, xIsNext, onSetSquares}) {

  const { winner, line } = calculateWinner(squares);

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    //create newSquares
    // alert(`${i} is clicked`);

    // immutatbility
    //never mutate the state directly

    // const newSquares = [...squares]
    const newSquares = squares.slice();

    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }

    onSetSquares(newSquares);
  }


  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `NExt player  : ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div>
      <div className="status"> {status} </div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isWinningSquare={line.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isWinningSquare={line.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isWinningSquare={line.includes(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isWinningSquare={line.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isWinningSquare={line.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isWinningSquare={line.includes(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isWinningSquare={line.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isWinningSquare={line.includes(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isWinningSquare={line.includes(8)}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <TicTacToe />
    </div>
  );
}

export default App;
