import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, startGame } from '../../../actions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import BunnyArray from '../BunnyArray';
import { getApi } from '../../../requestHelper';
import useInterval from '../../../hooks/useInterval';

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

  useInterval(async () => {
    if (numOfSignedInPlayers < numOfPlayers) {
      const res = await getApi('checkplayers');
      setBunnies(res.players);
      setNumOfSignedInPlayers(res.numOfSignedInPlayers);
    }
  }, 1000);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    console.log(userColor);
    console.log(userName);
  };

  const handleWarningClick = () => {
    sendStartGame();
  };

  const handleForwardClick = () => {
    if (numOfSignedInPlayers !== numOfPlayers) {
      setIsWarning(!isWarning);
    } else {
      sendStartGame();
    }
  };

  const sendStartGame = () => {
    getApi('startgame')
      .then((res) => {
        if (res.isGameStarted) {
          dispatch(signIn());
          dispatch(startGame());
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
