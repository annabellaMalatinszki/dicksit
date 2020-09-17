import React from 'react';
import Card from './Card';

const CardArray = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => {
        return <Card cardName={card.id} key={card.id}></Card>;
      })}
    </div>
  );
};

export default CardArray;
