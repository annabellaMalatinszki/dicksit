import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BackButton from '../BackButton';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  codeText: {
    margin: '2vh',
  },
  arrowButtons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
});

const PlayerCode = ({ setSignInStatus }) => {
  const [isValid, setIsValid] = useState(false);

  const classes = useStyles();

  const handleChange = (value) => {
    if (value.length === 4 && isAlphaNumeric(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const isAlphaNumeric = (input) => {
    const alphaNumeric = /^[0-9a-zA-Z]+$/;
    return input.match(alphaNumeric) ? true : false;
  };

  const handleClick = () => {
    // Do something
  };

  return (
    <div>
      <div className={classes.codeText}>
        <TextField
          label="Enter code"
          variant="outlined"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>

      <div className={classes.arrowButtons}>
        <BackButton setSignInStatus={setSignInStatus}></BackButton>
        <Button
          disabled={!isValid}
          onClick={() => {
            handleClick;
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default PlayerCode;
