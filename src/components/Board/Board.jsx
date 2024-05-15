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
  const [possibleMoves, setPossibleMoves] = useState([]);

  const handleCellClick = (rowIndex, colIndex) => {
    const piece = chessBoard[rowIndex][colIndex];
    if (piece && piece.color !== turn) return;

    if (selectedPiece) {
      if (selectedPiece.type === "pawn") {
        if (
          (turn === "white" && rowIndex > selectedPiece.rowIndex) ||
          (turn === "black" && rowIndex < selectedPiece.rowIndex)
        ) {
          return;
        }

        const distance = Math.abs(rowIndex - selectedPiece.rowIndex);
        if (
          distance > 2 ||
          (distance === 2 &&
            ((turn === "white" && selectedPiece.rowIndex !== 6) ||
              (turn === "black" && selectedPiece.rowIndex !== 1)))
        ) {
          return;
        }
        if (
          colIndex !== selectedPiece.colIndex &&
          (!piece || piece.color === turn)
        ) {
          return;
        }
      }

      const newBoard = [...chessBoard];
      newBoard[selectedPiece.rowIndex][selectedPiece.colIndex] = null;
      newBoard[rowIndex][colIndex] = { type: selectedPiece.type, color: turn };
      setChessBoard(newBoard);
      setSelectedPiece(null);
      setTurn(turn === "white" ? "black" : "white");
      setPossibleMoves([]);
    } else if (piece) {
      setSelectedPiece({ rowIndex, colIndex, type: piece.type });

      if (piece.type === "pawn") {
        const direction = piece.color === "white" ? -1 : 1;
        const moves = [];

        // Pawns can move forward one square
        if (!chessBoard[rowIndex + direction][colIndex]) {
          moves.push({ rowIndex: rowIndex + direction, colIndex });
        }

        // Pawns can move forward two squares from their initial position
        if (
          (piece.color === "white" && rowIndex === 6) ||
          (piece.color === "black" && rowIndex === 1)
        ) {
          if (!chessBoard[rowIndex + 2 * direction][colIndex]) {
            moves.push({ rowIndex: rowIndex + 2 * direction, colIndex });
          }
        }

        setPossibleMoves(moves);
      }
    }
  };

  return (
    <div>
      <div className="turn-display">
        Turn: {turn.charAt(0).toUpperCase() + turn.slice(1)}
      </div>
      <div className="board">
        {chessBoard[0].map((_, colIndex) => (
          <div key={`col-${colIndex}`} className="col">
            {chessBoard.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className={`square ${
                  (rowIndex + colIndex) % 2 === 0 ? "white" : "black"
                } ${
                  possibleMoves.some(
                    move =>
                      move.rowIndex === rowIndex && move.colIndex === colIndex)
                  
                    ? 'possible-move'
                    : ''
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {row[colIndex] && (
                  <Piece
                    type={row[colIndex].type}
                    color={row[colIndex].color}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
