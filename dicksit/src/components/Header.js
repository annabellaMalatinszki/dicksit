import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

function Header(props) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Dicksit</Typography>
          <IconButton edge="end" aria-label="Current user">
            <AccountCircle />
          </IconButton>
          <Typography variant="p">{props.name}</Typography>
          <IconButton edge="end" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
