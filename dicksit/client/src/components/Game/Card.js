import React from 'react';
import { CardMedia, CardActionArea, Card as MUICard } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '400px',
    width: 'auto',
    margin: '0 0.3em',
  },
});

const Card = ({ cardName }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MUICard raised className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={cardName}
            image={`${process.env.PUBLIC_URL}pics/${cardName}`}
            title={cardName}
          />
        </CardActionArea>
      </MUICard>
    </div>
  );
};

export default Card;
