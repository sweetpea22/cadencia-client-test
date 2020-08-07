import DataTile from "./DataTile";

export const StoragePowerTiles = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flex: "1 1 190px",
          justifyContent: "center",
        }}
      >
        <DataTile dataValue="110PiB" dataKey="Total Storage Capacity" />
        <DataTile dataValue="220TB" dataKey="Avg Miner Capacity" />
        <DataTile dataValue="91%" dataKey="Avg. Retrieval Success" />
        <DataTile dataValue="65%" dataKey="Avg Storage Success" />
      </div>
    </>
  );
};

export default StoragePowerTiles;
