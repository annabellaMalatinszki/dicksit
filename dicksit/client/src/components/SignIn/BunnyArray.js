import React, { useState } from 'react';
import Bunny from './Bunny';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bunny: {
    borderStyle: 'solid',
  },
});

const BunnyArray = ({ bunnies, selectedBunny, setSelectedBunny, isWait }) => {
  const classes = useStyle();

  return (
    <div className={isWait ? '' : classes.root}>
      {bunnies.map((bunny) => {
        return (
          <Bunny
            bunnyColor={bunny.color}
            playerName={bunny.name}
            key={bunny.id}
            className={classes.bunny}
            setSelectedBunny={setSelectedBunny}
            isSelected={selectedBunny === bunny.color ? true : false}
            isWait={isWait}
            isTaken={bunny.isTaken}
          />
        );
      })}
    </div>
  );
};

export default BunnyArray;
