import { Card, Button, Badge } from "antd";
import styles from "./defiTile.module.css";

export const DefiTile = ({ imgSrc }) => {
  return (
    
    <Card
      hoverable
      actions={[<Button>Add to Data Bundle</Button>]}
      className={styles.defiTile}
    >
      <img src={imgSrc}></img>
    </Card>
  );
};

export default DefiTile;
