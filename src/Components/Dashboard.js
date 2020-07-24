import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
  } from '@material-ui/core';
import {
    Apps as AppsIcon,
    Wifi as WifiIcon,
    Public as PublicIcon,
    Security as SecurityIcon
  } from '@material-ui/icons';

function Dashboard(){
  return(
    <Container>
      <List>
          <ListItem>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <Button component={Link} to="/web-protection">
              Web Protection
            </Button>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="App Protection"/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <Button component={Link} to="/network-protection">
                Network Protection
            </Button>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText primary="System Protection"/>
          </ListItem>
        </List>
      </Container>
  );
};

export default Dashboard;
