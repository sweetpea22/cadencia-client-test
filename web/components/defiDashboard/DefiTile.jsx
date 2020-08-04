import { Card } from "antd";
import styles from "./defiTile.module.css";

export const DefiTile = ({ imgSrc }) => {
  return (
    <Card className={styles.defiTile}>
      <img src={imgSrc}></img>
    </Card>
  );
};

export default DefiTile;
