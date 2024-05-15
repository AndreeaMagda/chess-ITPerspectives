import React from 'react';

import whitePawnImg from '../../assets/white-pawn.png';
import blackPawnImg from '../../assets/black-pawn.png';

function Pawn({ color, position, onPawnClick }) {
  const handleClick = () => {
    console.log(`Pawn at position ${position} clicked.`);
    onPawnClick(position, color);
  };

  const pawnImage = color === 'white' ? whitePawnImg : blackPawnImg;

  return (
    <div className={`pawn ${color}`} onClick={handleClick}>
      <img src={pawnImage} alt={`${color} pawn`} onClick={handleClick} />
    </div>
  );
}

export default Pawn;