import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
  },
  card: {
    maxWidth: 200,
  },
});

const CardArray = ({ cards }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {cards.map((card) => {
        return (
          <Card
            cardName={card.id}
            key={card.id}
            className={classes.card}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardArray;
