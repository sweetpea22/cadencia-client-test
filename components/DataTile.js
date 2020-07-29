import { Card } from "antd";
import styles from "./DataTile.module.css";
export const DataTile = ({dataValue, dataKey}) => {
  return (
    <Card className={styles.dataTile}>
      <h1 className={styles.dataValue}>{dataValue}</h1>
      <h3 className={styles.dataKey}>{dataKey}</h3>
    </Card>
  );
};

export default DataTile;
