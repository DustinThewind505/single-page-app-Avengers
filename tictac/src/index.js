import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square({ value, onClick }) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Game() {

    const [ squares, setSquares ] = useState(Array(9).fill('~'));

    function RenderSquare(i) {
        return <Square
          value={squares[i]}
          onClick={() => {
            const nextSquares = squares.slice();
              squares[i] = 'X';
              setSquares(nextSquares)
          }}
        />;
      }

    return (
      <div className="container">
        <div className="game">
          <div className="game-board">
            <div className="board-row">
              {RenderSquare(0)}
              {RenderSquare(1)}
              {RenderSquare(2)}
            </div>
            <div className="board-row">
              {RenderSquare(3)}
              {RenderSquare(4)}
              {RenderSquare(5)}
            </div>
            <div className="board-row">
              {RenderSquare(6)}
              {RenderSquare(7)}
              {RenderSquare(8)}
            </div>
          </div>
        </div>
      </div>
    );
  }

ReactDOM.render(<Game />, document.getElementById("root"));