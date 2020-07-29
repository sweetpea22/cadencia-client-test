import DataTile from "./DataTile";

export const DealTiles = () => {
  return (
    <>
      <div style={{display: "flex", width: "300px", flexDirection: "column", flexFlow: "column-wrap"}}>
        <DataTile dataValue="$9 USD" dataKey="Avg Deal Price"/>
        <DataTile dataValue="4GB" dataKey="Avg Deal Size"/>
      </div>
    </>
  )
}

export default DealTiles