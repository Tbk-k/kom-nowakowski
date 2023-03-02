import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconLocation from "../../assets/img/location.svg";
const Map = () => {
  const position = [54.3456264, 18.5325794];

  const LocationIcon = L.icon({
    iconUrl: iconLocation,
    iconRetinaUrl: iconLocation,
    popupAnchor: [0, 0],
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={position}
      zoom={18}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%", zIndex: "10" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={LocationIcon} />
      {/* <ResetCenterView lat={10} lng={20} /> */}
    </MapContainer>
  );
};

export default Map;
