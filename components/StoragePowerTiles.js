import DataTile from "./DataTile";

export const StoragePowerTiles = () => {
  return (
    <>
      <div style={{width: "500px", marginTop: "4.5rem"}}>
        <div style={{display: "flex", flexFlow: "row-wrap"}}>
          <DataTile dataValue="110PiB" dataKey="Total Storage Capacity"/>
          <DataTile dataValue="220TB" dataKey="Avg Miner Capacity"/>
        </div>
        <div style={{display: "flex", flexFlow: "row-wrap"}}>
          <DataTile dataValue="91%" dataKey="Avg Retrieval Deal Success Rate"/>
          <DataTile dataValue="65%" dataKey="Avg Storage Deal Success Rate"/>
        </div>
      </div>
    </>
  )
}

export default StoragePowerTiles