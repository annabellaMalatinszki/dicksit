import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserColor, setNumOfPlayers } from '../../../actions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BunnyArray from '../BunnyArray';
import BackButton from '../BackButton';
import { postApi } from '../../../requestHelper';
import NameField from '../NameField';

// TODO: This should not be here
const bunnies = [
  { color: 'blue', name: '' },
  { color: 'red', name: '' },
  { color: 'pink', name: '' },
  { color: 'yellow', name: '' },
  { color: 'orange', name: '' },
  { color: 'green', name: '' },
  { color: 'brown', name: '' },
  { color: 'purple', name: '' },
  { color: 'lime', name: '' },
  { color: 'salmon', name: '' },
  { color: 'aqua', name: '' },
  { color: 'black', name: '' },
];

const useStyle = makeStyles({
  slider: {
    width: '15vw',
  },
  arrowButtons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
});

const HostForm = ({ setCode, setSignInStatus }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const userColor = useSelector((state) => state.userColor);
  const numOfPlayers = useSelector((state) => state.numOfPlayers);

  const classes = useStyle();

  const handleClick = ({ setSignInStatus }) => {
    postApi('gameinfo', {
      userName,
      numOfPlayers,
      userColor,
    })
      .then((res) => {
        setCode(res.code);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <NameField />
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
            dispatch(setNumOfPlayers(value));
          }}
          valueLabelDisplay="auto"
          aria-labelledby="num-of-players-slider"
        />
        <div>
          <BunnyArray
            bunnies={bunnies.slice(0, numOfPlayers)}
            setSelectedBunny={(color) => {
              dispatch(setUserColor(color));
            }}
            selectedBunny={userColor}
          />
        </div>
        <div className={classes.arrowButtons}>
          <BackButton setSignInStatus={setSignInStatus} />
          <Button
            onClick={handleClick}
            disabled={userName === '' ? true : false}
          >
            <ArrowForwardIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HostForm;
