import {
  Map,
  TileLayer,
  LayersControl,
  LayerGroup,
  Marker,
  Tooltip,
} from "react-leaflet";
import { peers } from "../../lib/peers";

export default function MapComp(props) {
  const iconStyle = L.divIcon({ className: "mapIcon" });

  return (
    <Map center={[51.505, -0.09]} zoom={2}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <LayersControl position="topright">
        {peers.map((peer) => (
          <LayersControl.Overlay
            key={peer.client.type}
            checked
            name={peer.client.type}
          >
            <LayerGroup>
              {peers.map((peer) => (
                <Marker
                  key={peer.peerId}
                  position={[peer.location.Lat, peer.location.Lon]}
                  icon={iconStyle}
                >
                  <Tooltip>{`Using ${peer.client.type} v.${peer.client.version} From ${peer.city}`}</Tooltip>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    </Map>
  );
}
