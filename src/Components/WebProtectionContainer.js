import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs
  } from '@material-ui/core';
import { Public as PublicIcon } from '@material-ui/icons';

import {
  StatusIcon
  } from './Styles';
import WebProtectionSafeBrowsing from './WebProtectionSafeBrowsing';
import WebProtectionProtectionPrivacyTracking from './WebProtectionPrivacyTracking';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box>{children}</Box>
      )}
    </div>
  );
};

function WebProtectionContainer(){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Container>
      <AppBar position="static">
        <Tabs onChange={handleChange} value={value}>
          <Tab label="Safe Browsing"/>
          <Tab label="Privacy Tracking"/>
        </Tabs>
      </AppBar>
      <div className="LKOcontainer">
        <StatusIcon>
          <PublicIcon/>
        </StatusIcon>
      </div>
      <TabPanel value={value} index={0}>
        <WebProtectionSafeBrowsing/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WebProtectionProtectionPrivacyTracking/>
      </TabPanel>
    </Container>
  )
};

export default WebProtectionContainer;
