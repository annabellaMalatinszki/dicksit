import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Backdrop,
  Paper,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  accountIcon: {
    padding: '1em',
  },
  backdrop: {
    zIndex: 1,
  },
  dropDownPaper: {
    padding: '1em',
    width: '25vw',
  },
});

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (backdrop) => {
    setOpen(backdrop);
  };

  const handleMenuItemClose = () => {
    setOpen(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dicksit
          </Typography>
          <IconButton
            edge="end"
            aria-label="Current user"
            className={classes.accountIcon}
          >
            <AccountCircle />
          </IconButton>
          <Typography variant="body1">{props.name}</Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleMenuItemClick('scoring');
              }}
            >
              Scoring
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick('rules');
              }}
            >
              Rules
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>

            <Backdrop
              className={classes.backdrop}
              open={open === 'scoring' ? true : false}
              onClick={handleMenuItemClose}
            >
              <div>
                <Paper elevation={3} className={classes.dropDownPaper}>
                  <Typography variant="subtitle2">
                    If all players find the storyteller's card:
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        Storyteller: 0 points
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Other players: 2 points
                      </Typography>
                    </li>
                  </ul>
                  <Typography variant="subtitle2">
                    If no players find the storyteller's card:
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        Storyteller: 0 points
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Other players: 2 points (+1 bonus point per vote for
                        his/her card)
                      </Typography>
                    </li>
                  </ul>
                  <Typography variant="subtitle2">
                    If at least 1 player, but not all players have found the
                    storyteller's card:
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        Storyteller: 3 points
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Players who found the card: 3 points (+1 bonus point per
                        vote for his/her card)
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Other players: 0 points (+1 bonus point per vote for
                        his/her card)
                      </Typography>
                    </li>
                  </ul>
                </Paper>
              </div>
            </Backdrop>

            <Backdrop
              className={classes.backdrop}
              open={open === 'rules' ? true : false}
              onClick={handleMenuItemClose}
            >
              <div>
                <Paper elevation={3} className={classes.dropDownPaper}>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, placeat suscipit? Minus nisi blanditiis optio
                    exercitationem qui error sapiente quibusdam accusantium.
                    Enim nulla inventore quaerat ducimus iusto possimus aut id.
                  </Typography>
                </Paper>
              </div>
            </Backdrop>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
