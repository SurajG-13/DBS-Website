import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

// Import your red marker image
import redMarker from '../assets/map-marker-svgrepo-com.svg';

// Shadow-free icon
const redIcon = L.icon({
  iconUrl: redMarker,
  iconSize: [32, 48],      // adjust if needed
  iconAnchor: [16, 48],    // bottom center
  popupAnchor: [0, -48],   // popup above marker
  shadowUrl: null,         // IMPORTANT
  shadowSize: null,
  shadowAnchor: null,
});

const Location = () => {
  const position = [22.937343698365193, 88.7834326113937];

  return (
    <Card className="w-full">
      <CardContent>
        <div className="w-full h-64">
          <MapContainer
            center={position}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />

            <Marker position={position} icon={redIcon}>
              <Popup>Don Bosco School Thakurnagar</Popup>
            </Marker>
          </MapContainer>
        </div>
      </CardContent>

      {/* <CardContent>
        <Typography variant="h5">Don Bosco School Thakurnagar</Typography>
        <Typography variant="body2" color="text.secondary">
          Thakurnagar, Post Office: Thakurnagar, Pin: 743287, District: North 24 Parganas
        </Typography>
      </CardContent> */}
    </Card>
  );
};

export default Location;
