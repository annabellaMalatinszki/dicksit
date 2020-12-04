import React, { useState } from 'react';
import { CardMedia, CardActionArea, Card as MUICard } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: '1vw',
  },
  bunny: {
    width: '50px',
    margin: '5px',
    transition: 'all .25s linear',
    boxShadow: 'none',
    padding: '2px',
    '&:hover': {
      backgroundColor: 'rgba(210, 215, 211, 1)',
    },
  },
  selected: {
    borderStyle: 'groove',
    borderColor: 'rgba(63,81,181,0.5)',
    borderWidth: '2px',
    backgroundColor: 'rgba(179, 188, 185, 1)',
  },
});

const Bunny = ({
  bunnyColor,
  isSelected,
  setSelectedBunny,
  playerName,
  isWait,
}) => {
  const classes = useStyle();

  const handleClick = () => {
    if (!isWait) setSelectedBunny(bunnyColor);
  };

  return (
    <div className={isWait ? classes.root : ''}>
      <MUICard
        className={`${classes.bunny} ${isSelected ? classes.selected : null}`}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={bunnyColor}
            image={`${process.env.PUBLIC_URL}pics/bunny_${bunnyColor}.png`}
            title={bunnyColor}
            onClick={() => {
              handleClick();
            }}
          />
        </CardActionArea>
      </MUICard>
      {playerName ? <p>{playerName}</p> : ''}
    </div>
  );
};

export default Bunny;
