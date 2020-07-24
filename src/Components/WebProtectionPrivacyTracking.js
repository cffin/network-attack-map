import React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch
  } from '@material-ui/core';

import { privacyData } from '../data';
import {
  SliderItem,
  Status
  } from './Styles';

function WebProtectionProtectionPrivacyTracking(){
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    console.log('event', event.target);
    
  };

  return(
    <Container>
      <div className="LKOcontainer">
        <Status>3 trackers blocked of {privacyData.length} detected today</Status>
      </div>
      <List className="LKOlist">
      {privacyData.map((item) => (
        <ListItem className="LKOlistitem" key={item.id}>
          <ListItemText primary={item.name} secondary={
            <React.Fragment>
              <div style={{fontSize: '0.5em', color:'lightgrey'}}>{item.domain}</div>
              <div>{`${item.name} is a ${item.type}. This ${item.description}.`}</div>
            </React.Fragment>
          }/>
          <ListItemSecondaryAction>
            <SliderItem item>Detected</SliderItem>
            <SliderItem item>
              <Switch color="secondary" checked={item.isBlocked} onChange={handleChange}/>
            </SliderItem>
            <SliderItem item>Blocked</SliderItem>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      </List>
    </Container>
  );
};

export default WebProtectionProtectionPrivacyTracking;
