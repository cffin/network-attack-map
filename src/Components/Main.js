import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Dashboard from './Dashboard';
import ThreatMap from './ThreatMap';
import NetworkProtectionContainer from './NetworkProtectionContainer';
import WebProtectionContainer from './WebProtectionContainer';

function Main(){
  return(
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/network-protection">
        <NetworkProtectionContainer/>
      </Route>
      <Route path="/network-threat-map">
        <ThreatMap />
      </Route>
      <Route path="/web-protection">
        <WebProtectionContainer/>
      </Route>
    </Switch>
  );
};

export default Main;
