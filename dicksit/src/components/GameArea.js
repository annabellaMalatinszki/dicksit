import React from 'react';
import CardArray from './CardArray';

const GameArea = ({ cards }) => {
  return (
    <div>
      <CardArray cards={cards} />
    </div>
  );
};

export default GameArea;
