import DataTile from "./DataTile";
import styles from "./DealTiles.module.css"

export const DealTiles = () => {
  return (
    <>
      <div className={styles.tilesWrapper}>
        <DataTile dataValue="$9 USD" dataKey="Avg Deal Price"/>
        <DataTile dataValue="4GB" dataKey="Avg Deal Size"/>
      </div>
    </>
  )
}

export default DealTiles