import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

function Header(props) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          Dicksit
          <IconButton edge="end" aria-label="Current user">
            <AccountCircle />
          </IconButton>
          <IconButton edge="end" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
