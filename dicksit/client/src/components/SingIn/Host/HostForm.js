import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import BunnyArray from '../BunnyArray';

const requestHelper = require('../../../requestHelper.js');

// TODO: This should not be here
const bunnies = [
  { color: 'blue' },
  { color: 'red' },
  { color: 'pink' },
  { color: 'yellow' },
  { color: 'orange' },
  { color: 'green' },
  { color: 'brown' },
  { color: 'purple' },
  { color: 'lime' },
  { color: 'grey' },
  { color: 'aqua' },
  { color: 'black' },
];

const useStyle = makeStyles({
  nameInput: {
    width: '15vw',
    marginBottom: '2vh',
  },
  slider: {
    width: '15vw',
  },
  nextButton: {
    margin: '2vh',
  },
});

const HostForm = ({ setCode }) => {
  const [name, setName] = useState();
  const [numOfPlayers, setNumOfPlayers] = useState(4);
  const [selectedBunny, setSelectedBunny] = useState('');

  const classes = useStyle();

  const handleClick = () => {
    requestHelper
      .postGameInfo({
        name,
        numOfPlayers,
        selectedBunny,
      })
      .then((res) => {
        setCode(res.code);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <TextField
          className={classes.nameInput}
          label="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></TextField>
        <Typography id="num-of-players-slider" gutterBottom>
          Number of players
        </Typography>
        <Slider
          className={classes.slider}
          value={numOfPlayers}
          min={4}
          step={1}
          max={12}
          onChange={(e, value) => {
            setNumOfPlayers(value);
          }}
          valueLabelDisplay="auto"
          aria-labelledby="num-of-players-slider"
        />
        <div>
          <BunnyArray
            bunnies={bunnies.slice(0, numOfPlayers)}
            setSelectedBunny={setSelectedBunny}
            selectedBunny={selectedBunny}
          />
        </div>
        <Button
          className={classes.nextButton}
          variant="contained"
          onClick={handleClick}
        >
          {/* <Link to="/code"> */}
          <Typography variant="h6">Next</Typography>
          {/* </Link> */}
        </Button>
      </form>
    </div>
  );
};

export default HostForm;
