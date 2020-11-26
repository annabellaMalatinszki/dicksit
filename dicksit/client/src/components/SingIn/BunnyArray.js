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

const BunnyArray = ({ bunnies, selectedBunny, setSelectedBunny }) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      {bunnies.map((bunny) => {
        return (
          // <div
          //   onClick={() => {
          //     setSelectedBunny(bunny.color);
          //   }}
          // >
          <Bunny
            bunnyColor={bunny.color}
            key={bunny.color}
            className={classes.bunny}
            setSelectedBunny={setSelectedBunny}
            isSelected={selectedBunny === bunny.color ? true : false}
          />
          // </div>
        );
      })}
    </div>
  );
};

export default BunnyArray;
