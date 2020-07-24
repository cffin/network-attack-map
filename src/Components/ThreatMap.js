import React from 'react';
import { Container } from '@material-ui/core';
import mapboxgl from 'mapbox-gl';

import { geojsonData } from '../data';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2tyYWN6a293c2t5IiwiYSI6ImNrY2F0c2RkdjFiMHYycm9mOHc2cWpkaTQifQ.A6dJbuqhlWaEe6WsFeRS2Q';

export default class ThreatMap extends React.Component{
  constructor(){
    super();
    this.state={
      lng: -122.414,
      lat: 37.76,
      zoom: 12
    };
  };

  componentDidMount(){
// Initialize map
    var map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
// Update state when user moves map
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(4)
      });
    });
// Add marker for current location
  var currentLocationElement = document.createElement('div');
  currentLocationElement.className = 'LKOcurrentlocationmarker'
  new mapboxgl.Marker(currentLocationElement)
    .setLngLat([-122.4449224,37.7625244])
    .addTo(map);
// Add markers and popups for geoJSON data
    geojsonData.features.forEach(function(marker) {
      var element = document.createElement('div');
      element.className = 'LKOnetworkincidentmarker';
      new mapboxgl.Marker(element)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
    });
  };

  render(){
    return(
      <Container style={{textAlign: 'center'}}>
        <div>
          <div className="coordDisplay">Longitude: {this.state.lng} | Latitude {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div className="mapContainer" ref={(element) => this.mapContainer = element }></div>
      </Container>
    );
  };

};
