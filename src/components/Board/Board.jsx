import React from 'react'
import "./Board.css"
import Piece from "../Piece/Piece"

function Board() {
    
    const chessBoard = [
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
        ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    ];

   
    return (
        <div className='board'>
            {chessBoard[0].map((_, colIndex) => (
                <div key={`col-${colIndex}`} className='col'>
                    {chessBoard.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className={`square ${((rowIndex + colIndex) % 2 === 0) ? 'white' : 'black'}`}>
                            {row[colIndex] && <Piece type={row[colIndex]} color={rowIndex < 2 ? 'black' : 'white'} />}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;