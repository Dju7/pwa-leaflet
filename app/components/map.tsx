import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css'

function LocationMarker({ onLatLngChange }) {
    
    const [markerPlace, setMarkerPlace] = useState<LatLng | null>(null)
    const markerRef = useRef(null);
  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [30, 30]
  })
  const map = useMapEvents({
    click(e) {
      const { latlng } = e;
      setMarkerPlace(latlng);
      const latlngValue = `Latitude: ${latlng.lat.toFixed(6)}, Longitude: ${latlng.lng.toFixed(6)}`;
     
      onLatLngChange(latlngValue);

      map.flyTo(latlng, map.getZoom());
    },
  });
  
    return markerPlace === null ? null : (
        <Marker
        position={markerPlace}
        ref={markerRef}
        draggable={true}
        icon={customIcon}
      >
       <Popup minWidth={90}>
          <span>
            hello
          </span>
        </Popup>
      </Marker>
    )
  }


const MyMap = () => {
  const [zoom] = useState(13);
  const [latlngValue, setLatlngValue] = useState(null);
  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [30, 30]
  })

  const handleLatLngChange = (newLatLngValue) => {
    setLatlngValue(newLatLngValue);
  };

  return (
    <>
    <MapContainer center={[40.8054, -74.0241]} zoom={zoom} style={{ height: '700px' }}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <LocationMarker onLatLngChange={handleLatLngChange}/>
      
    </MapContainer>
    {latlngValue && <p>{latlngValue}</p>}
    </>
  );
};

export default MyMap;
