import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation2 } from 'lucide-react';
import type { Workplace } from '../types/workplace';

// Fix for default markers
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  workplaces: Workplace[];
  center: [number, number];
}

function LocationButton() {
  const map = useMap();

  const handleClick = () => {
    map.locate().on('locationfound', (e) => {
      map.flyTo(e.latlng, map.getZoom());
    });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-5 right-5 z-[999] bg-white p-2 rounded-lg shadow-lg hover:bg-slate-50"
      title="Find my location"
    >
      <Navigation2 className="h-6 w-6 text-blue-600" />
    </button>
  );
}

export default function Map({ workplaces, center }: MapProps) {
  return (
    <div className="relative h-[60vh] w-full">
      <MapContainer
        center={center}
        zoom={13}
        className="h-full w-full"
        style={{ background: '#f8fafc' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {workplaces.map((workplace) => (
          <Marker
            key={workplace.id}
            position={workplace.coordinates}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-lg">{workplace.name}</h3>
                <p className="text-sm text-slate-600">{workplace.type}</p>
                <div className="mt-2">
                  <span className="text-yellow-500">
                    {'★'.repeat(Math.round(workplace.rating.overall))}
                    {'☆'.repeat(5 - Math.round(workplace.rating.overall))}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <LocationButton />
      </MapContainer>
    </div>
  );
}