import React, { useEffect } from 'react';

const GoogleMap = ({ address }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },  
      zoom: 8,  
    });

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        map.setCenter(location);

        new window.google.maps.Marker({
          map: map,
          position: location,
          title: address,
        });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  }, [address]);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default GoogleMap;
