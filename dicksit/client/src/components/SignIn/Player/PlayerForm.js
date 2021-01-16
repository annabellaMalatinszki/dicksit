import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserColor, signIn } from '../../../actions';
import NameField from '../NameField';
import BunnyArray from '../BunnyArray';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import { getApi, postApi } from '../../../requestHelper';
import useInterval from '../../../hooks/useInterval';

const useStyles = makeStyles({
  root: {
    maxWidth: '24vw',
  },
});

const PlayerForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const userColor = useSelector((state) => state.userColor);
  const [bunnies, setBunnies] = useState([]);

  useInterval(async () => {
    const res = await getApi('checkcolors');
    setBunnies(res.colors);
  }, 1000);

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
