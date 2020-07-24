import React from 'react';
import {
  Link
  } from 'react-router-dom';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';

const StyledButton = withStyles({
  root: {
    color: "white"
  }
})(Button);

function MenuBar(){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClose={handleClose} component={Link} to="/web-protection">Web Protection</MenuItem>
            <MenuItem>App Protection</MenuItem>
            <MenuItem onClose={handleClose} component={Link} to="/network-protection">Network Protection</MenuItem>
            <MenuItem>System Protection</MenuItem>
          </Menu>
          <StyledButton component={Link} to="/">Demo App</StyledButton>
        </Toolbar>
      </AppBar>
  );
};

export default MenuBar;
