import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserColor, signIn } from '../../../actions';
import NameField from '../NameField';
import BunnyArray from '../BunnyArray';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import { postApi } from '../../../requestHelper';

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

const useStyles = makeStyles({
  root: {
    maxWidth: '24vw',
  },
});

const PlayerForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const userColor = useSelector((state) => state.userColor);

  const classes = useStyles();

  const handleClick = () => {
    postApi('signinplayer', {
      userName,
      userColor,
    })
      .then((res) => {
        if (res.signInSuccess) {
          dispatch(signIn());
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <NameField />
      <div>
        <BunnyArray
          bunnies={bunnies}
          setSelectedBunny={(color) => {
            dispatch(setUserColor(color));
          }}
          selectedBunny={userColor}
        />
      </div>
      <Button onClick={handleClick} disabled={userName === '' ? true : false}>
        <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default PlayerForm;
