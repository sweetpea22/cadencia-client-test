import { Card, Button, Badge } from "antd";
import styles from "./defiTile.module.css";

export const DefiTile = ({ imgSrc, handleClick }) => {
  const [isCardSelected, setCardSelected] = React.useState(false);

  return (
    <Card
      hoverable
      actions={[<Button onClick={handleClick}>Add to Data Bundle</Button>]}
      className={styles.defiTile}
      style={isCardSelected ? { border: "4px solid blue" } : null}
    >
      <img src={imgSrc}></img>
    </Card>
  );
};

export default DefiTile;
