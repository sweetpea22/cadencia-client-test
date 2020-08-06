import { Map, TileLayer, Circle, Tooltip } from "react-leaflet";
import { peers } from "../../lib/peers";

export default function MapComp(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Current Filecoin Miners</h2>
        <Map style={{ marginTop: "1rem" }} center={[51.505, -0.09]} zoom={2}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {peers.map((peer, index) => (
            <Circle
              key={`${peer.peerId}${index}`}
              center={[peer.location.Lat, peer.location.Lon]}
            >
              <Tooltip>{`Using ${peer.client.type} v.${peer.client.version} From ${peer.city}`}</Tooltip>
            </Circle>
          ))}
        </Map>
      </div>
    </>
  );
}
