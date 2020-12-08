import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BackButton from '../BackButton';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { postApi } from '../../../requestHelper';

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

const PlayerCode = ({ setSignInStatus, setIsValidated }) => {
  const [isValidFormat, setIsValidFormat] = useState(false);
  const [code, setCode] = useState('');
  const [isWarning, setIsWarning] = useState(false);

  const classes = useStyles();

  const handleChange = (value) => {
    if (value.length === 4 && isAlphaNumeric(value)) {
      setIsValidFormat(true);
      setCode(value);
    } else {
      setIsValidFormat(false);
    }
  };

  const isAlphaNumeric = (input) => {
    const alphaNumeric = /^[0-9a-zA-Z]+$/;
    return input.match(alphaNumeric) ? true : false;
  };

  const handleClick = () => {
    postApi('validatecode', {
      code,
    })
      .then((res) => {
        if (!res.isValid) {
          setIsWarning(true);
          setIsValidFormat(false);
        } else {
          setIsValidated(res.isValid);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
      {isWarning ? (
        <div>
          <Alert severity="error">Invalid code</Alert>
        </div>
      ) : (
        ''
      )}
      <div className={classes.arrowButtons}>
        <BackButton setSignInStatus={setSignInStatus}></BackButton>
        <Button
          disabled={!isValidFormat}
          onClick={() => {
            handleClick();
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default PlayerCode;
