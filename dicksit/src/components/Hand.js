import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardArray from './CardArray';

const Hand = ({ cards }) => {
  return (
    <div>
      <Typography variant="h6">Your Hand</Typography>
      <CardArray cards={cards}></CardArray>
    </div>
  );
};

export default Hand;
