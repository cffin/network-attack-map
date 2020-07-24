import React from 'react';

import {
  Status,
  Subtitle,
  Text
  } from './Styles';

function WebProtectionProtectionSafeBrowsing(){
  return(
    <div>
      <div className="LKOcontainer">
        <Status>0 sites flagged of 0 analyzed today</Status>
      </div>
      <Text>Lookout automatically warns you about sites that compromise your security. We analyze link from apps, email, text messages and more - we'll alert you instantly if we detect anything suspicious.</Text>
      <Subtitle>When an issue is detected:</Subtitle>
      <ul>
        <li>You will get a notification that warns you about the malicious or phishing site.</li>
        <li>Depending on how your company has set up your protection, you will be warned or blocked from loading the site.</li>
      </ul>
      <Subtitle>Lookout doesn't allow your admin to see:</Subtitle>
      <ul>
        <li>Browsing history</li>
      </ul>
    </div>
  );
};

export default WebProtectionProtectionSafeBrowsing;
