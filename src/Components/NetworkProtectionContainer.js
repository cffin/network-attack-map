import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Wifi as WifiIcon } from '@material-ui/icons';

import {
  Status,
  StatusIcon,
  Subtitle,
  Text
  } from './Styles';

function NetworkProtectionContainer(){
  return(
    <Container>
      <div className="LKOcontainer">
        <StatusIcon>
          <WifiIcon/>
        </StatusIcon>
        <Status>Current network is safe</Status>
        <Text component={Link} to="/network-threat-map">See network incidents near you</Text>
      </div>
      <Text>Lookout detects attacks that attempt to steal your personal or sensitive company data over Wi-Fi or cellular networks.</Text>
      <Subtitle>When an issue is detected:</Subtitle>
      <ul>
        <li>You will get a notification that the network you're connected to is dangerous with intstructions on how to disconnect.</li>
        <li>Depending on your company policy, access to corporate data may be blocked to prevent sensitive information from being exposed.</li>
      </ul>
      <Subtitle>Lookout doesn't allow your admin to see:</Subtitle>
      <ul>
        <li>The history of Wi-Fi networks you have joined</li>
      </ul>
    </Container>
  );
};

export default NetworkProtectionContainer;
