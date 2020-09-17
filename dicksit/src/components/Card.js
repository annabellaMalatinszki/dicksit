import React from 'react';
import { CardMedia, CardActionArea, Card as MUICard } from '@material-ui/core';

const Card = ({ cardName }) => {
  return (
    <div>
      <MUICard raised>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={cardName}
            image={`${process.env.PUBLIC_URL}pics/${cardName}`}
            title={cardName}
          ></CardMedia>
        </CardActionArea>
      </MUICard>
    </div>
  );
};

export default Card;
