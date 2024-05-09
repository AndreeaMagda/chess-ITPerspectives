import React from 'react'
import "./Board.css"

function Board() {
    const colors=["white","black"];
    const chessBoard=[];

    for(let row=0;row<8;row++){
        for(let col=0;col<8;col++){
            const color=colors[(row+col)%2];
            chessBoard.push(<div key={`${row}-${col}`} className={`square ${color}`}></div>);
        }
    }
    return ( 
        <div className='board'>
            {chessBoard}
        </div>
     );
}

export default Board;