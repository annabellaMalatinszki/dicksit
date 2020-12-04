import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../actions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import BunnyArray from '../BunnyArray';
import { callApi } from '../../../requestHelper';

const useStyles = makeStyles({
  codeText: {
    margin: '2vh',
  },
  forwardArrow: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const HostWait = ({ code }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const numOfPlayers = useSelector((state) => state.numOfPlayers);
  const userColor = useSelector((state) => state.userColor);
  const userName = useSelector((state) => state.userName);
  const [isCopied, setIsCopied] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [numOfSignedInPlayers, setNumOfSignedInPlayers] = useState(1);
  const [bunnies, setBunnies] = useState([]);

  useEffect(() => {
    const bunnyArray = [{ color: userColor, name: userName }];
    for (let i = 0; i < numOfPlayers - 1; i++) {
      bunnyArray.push({ color: 'blank', name: '' });
    }
    setBunnies(bunnyArray);
  }, []);

  const checkPlayers = () => {
    callApi('checkplayers')
      .then((res) => {
        // TODO: numOfSignedInPlayers should be updated
        // TODO: bunnies should be updated with color and playername
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    console.log(userColor);
    console.log(userName);
  };

  const handleWarningClick = () => {
    dispatch(signIn());
  };

  const handleForwardClick = () => {
    if (numOfSignedInPlayers < numOfPlayers) {
      setIsWarning(!isWarning);
    } else {
      dispatch(signIn());
    }
  };

  return (
    <div>
      <TextField
        className={classes.codeText}
        label="Click to copy"
        defaultValue={code}
        InputProps={{ readOnly: true }}
        variant="outlined"
        helperText={isCopied ? 'Copied to clipboard' : ''}
        onClick={() => {
          handleCopyClick();
        }}
      />
      <div>
        <Typography variant="h6">
          {numOfPlayers === numOfSignedInPlayers
            ? 'Ready to go'
            : 'Waiting for players to join'}
        </Typography>
        <BunnyArray bunnies={bunnies} isWait={true}></BunnyArray>
      </div>

      {isWarning ? (
        <div>
          <Alert
            severity="warning"
            action={
              <Button
                onClick={() => {
                  handleWarningClick();
                }}
              >
                Yes
              </Button>
            }
          >
            Some players haven't joined yet. Start anyway?
          </Alert>
        </div>
      ) : (
        ''
      )}
      <div className={classes.forwardArrow}>
        <Button onClick={handleForwardClick}>
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default HostWait;
