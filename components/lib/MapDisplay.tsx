'use client';

import { GoogleMap, Marker } from '@react-google-maps/api';

import React from 'react';

const containerStyle = {
  width: 'auto',
  height: '400px',
};

const center = {
  lat: 43.63253666129893,
  lng: 1.3993991018641339,
};

const MapDisplay = ({ className }: { className?: string }) => {
  if (typeof google === 'undefined') {
    return <p>Impossible d'afficher la carte</p>;
  }

  return (
    <div id="mapContainer" className={`${className || ''}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapDisplay;
