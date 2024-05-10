import React from 'react';
import './Piece.css';
import whiteRookImg from '../../assets/white-rook.png';
import whiteKnightImg from '../../assets/white-knight.png';
import whiteBishopImg from '../../assets/white-bishop.png';
import whiteQueenImg from '../../assets//white-queen.png';
import whiteKingImg from '../../assets/white-king.png';
import whitePawnImg from '../../assets/white-pawn.png';
import blackRookImg from '../../assets/black-rook.png';
import blackKnightImg from '../../assets/black-knight.png';
import blackBishopImg from '../../assets/black-bishop.png';
import blackQueenImg from '../../assets/black-queen.png';
import blackKingImg from '../../assets/black-king.png';
import blackPawnImg from '../../assets/black-pawn.png';

function Piece({ type, color }) {
    
    let imagePath;
    if(color === 'white'){
        switch(type){
            case 'rook':
                imagePath = whiteRookImg;
                break;
            case 'knight':
                imagePath = whiteKnightImg;
                break;
            case 'bishop':
                imagePath = whiteBishopImg;
                break;
            case 'queen':
                imagePath = whiteQueenImg;
                break;
            case 'king':
                imagePath = whiteKingImg;
                break;
            case 'pawn':
                imagePath = whitePawnImg;
                break;
            default:
                break;
        }
    }else{
        switch (type) {
            case 'rook':
                imagePath = blackRookImg;
                break;
            case 'knight':
                imagePath = blackKnightImg;
                break;
            case 'bishop':
                imagePath = blackBishopImg;
                break;
            case 'queen':
                imagePath = blackQueenImg;
                break;
            case 'king':
                imagePath = blackKingImg;
                break;
            case 'pawn':
                imagePath = blackPawnImg;
                break;
            default:
                break;
        }
    }

    return (
        <div className='piece'>
        <img src={imagePath} alt={`${color}-${type}`} />
        </div>
    );
}

export default Piece;
