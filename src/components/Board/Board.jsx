import React, { useState } from "react";
import "./Board.css";
import Piece from "../Piece/Piece";
import Pawn from "../Piece/Pawn";

function Board() {
  const [chessBoard, setChessBoard] = useState([
    [
      { type: "rook", color: "black" },
      { type: "knight", color: "black" },
      { type: "bishop", color: "black" },
      { type: "queen", color: "black" },
      { type: "king", color: "black" },
      { type: "bishop", color: "black" },
      { type: "knight", color: "black" },
      { type: "rook", color: "black" },
    ],
    Array(8).fill({ type: "pawn", color: "black" }),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill({ type: "pawn", color: "white" }),
    [
      { type: "rook", color: "white" },
      { type: "knight", color: "white" },
      { type: "bishop", color: "white" },
      { type: "queen", color: "white" },
      { type: "king", color: "white" },
      { type: "bishop", color: "white" },
      { type: "knight", color: "white" },
      { type: "rook", color: "white" },
    ],
  ]);

  const [selectedPiece, setSelectedPiece] = useState(null);
  const [turn, setTurn] = useState("white");
  const handleCellClick = (rowIndex, colIndex) => {
    const piece = chessBoard[rowIndex][colIndex];
    if (piece && piece.color !== turn) return;

    if (selectedPiece) {
      const newBoard = [...chessBoard];
      newBoard[selectedPiece.rowIndex][selectedPiece.colIndex] = null;
      newBoard[rowIndex][colIndex] = { type: selectedPiece.type, color: turn };
      setChessBoard(newBoard);
      setSelectedPiece(null);
      setTurn(turn === "white" ? "black" : "white");
    } else if (piece) {
      setSelectedPiece({ rowIndex, colIndex, type: piece.type });
    }
  };

  return (
    <div className="board">
      {chessBoard[0].map((_, colIndex) => (
        <div key={`col-${colIndex}`} className="col">
          {chessBoard.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`square ${
                (rowIndex + colIndex) % 2 === 0 ? "white" : "black"
              }`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {row[colIndex] && (
                <Piece type={row[colIndex].type} color={row[colIndex].color} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
