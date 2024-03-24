import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

L.Icon.Default.imagePath='img/'

export default function Map (){
  const position = [38.004328,23.797526  ]; // Default map center coordinates

  return (
    <MapContainer center={position} zoom={20} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Σοφία Μητρογιαννοπούλου, Φανερωμένης 11, Χολαργός, 15561
        </Popup>
        <Tooltip direction='top' offset={[0, 0]} opacity={1} permanent >Σοφία Μητρογιαννοπούλου <br></br> Ψυχολόγος-Ψυχοθεραπεύτρια</Tooltip>
      </Marker>
    </MapContainer>
  );
};