import React, { useEffect, useState, useRef } from 'react';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GeoMap = ({ address }) => {
  const position = [48.618531, 22.291568];
  const [mapReady, setMapReady] = useState(false);
  const mapContainerRef = useRef();

  const custom_icon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/446/446075.png',
    iconSize: [25, 34],
    iconAnchor: [12, 34],
  });

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (mapContainer) {
      mapContainer.addEventListener('click', () => {
      });

      mapContainer.addEventListener('transitionend', () => {
        setMapReady(true);
      });
    }
  }, []);

  useEffect(() => {
    if (mapReady) {
      const map = mapContainerRef.current.leafletElement;
      map.invalidateSize();
    }
  }, [mapReady]);

  return (
    <MapContainer
      ref={mapContainerRef}
      className="map-container"
      center={position}
      zoom={21}
      style={{ height: '70vh' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={custom_icon} />
    </MapContainer>
  );
};

export default GeoMap;
