import { Map, TileLayer } from "react-leaflet";

export default function MapComp() {
  return (
    <Map center={[51.505, -0.09]} zoom={2}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}
