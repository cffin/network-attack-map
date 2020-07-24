const geojsonData = {
  type: 'NetworkIncidentCollection',
  features: [{
    type: 'NetworkIncident',
    geometry: {
      type: 'Point',
      coordinates: [-122.4165, 37.7722]
    },
    properties: {
      title: 'Secure Traffic Decryption',
      description: '__VPN__'
    }
  },
  {
    type: 'NetworkIncident',
    geometry: {
      type: 'Point',
      coordinates: [-122.414, 37.776]
    },
    properties: {
      title: 'Content Manipulation',
      description: 'NETGEAR72-5G'
    }
  },
  {
    type: 'NetworkIncident',
    geometry: {
      type: 'Point',
      coordinates: [-122.412, 37.765]
    },
    properties: {
      title: 'Secure Traffic Decryption',
      description: 'SFUSD-GUEST'
    }
  },
  {
    type: 'NetworkIncident',
    geometry: {
      type: 'Point',
      coordinates: [-122.4154, 37.7691]
    },
    properties: {
      title: 'Secure Traffic Decryption',
      description: 'ALASKA_WIFI'
    }
  },
  {
    type: 'NetworkIncident',
    geometry: {
      type: 'Point',
      coordinates: [-122.4272, 37.7722]
    },
    properties: {
      title: 'Content Manipulation',
      description: 'shutterbug_network'
    }
  },
  {
    type: 'NetworkIncident',
    geometry: {
      type: 'Point',
      coordinates: [-122.420, 37.768]
    },
    properties: {
      title: 'Secure Traffic Decryption',
      description: '#SFWiFi'
    }
  },
  {
    type: 'NetworkIncident',
    geometry: {
      type: 'Point',
      coordinates: [-122.410, 37.777]
    },
    properties: {
      title: 'Secure Traffic Decryption',
      description: 'SouthwestWiFi'
    }
  }]
};

const privacyData = [
    {
      id: 1,
      type: 'Data Tracker',
      name: 'Firebase',
      domain: 'app-measurement.com',
      description: 'is known to collect analytics and device information',
      isBlocked: true
    },
    {
      id: 2,
      type: 'Data Tracker',
      name: 'Mixpanel',
      domain: 'mixpanel.com',
      description: 'is known to collect analytics and device information',
      isBlocked: false
    },
    {
      id: 3,
      type: 'Data Tracker',
      name: 'Facebok Graph',
      domain: 'graph.facebook.com',
      description: 'is known to collect analytics and device information',
      isBlocked: true
    },
    {
      id: 4,
      type: 'Mail Tracker',
      name: 'Return Path',
      domain: 'pixel.app.returnpath.net',
      description: 'is known to track your receipt of e-mail messages',
      isBlocked: true
    },
    {
      id: 5,
      type: 'Ad Tracker',
      name: 'Optimizely',
      domain: 'optimizely.com',
      description: 'is known to collect data on your views, clicks, and other interactions with an online ad',
      isBlocked: false
    }
]

export {
  geojsonData,
  privacyData
};
