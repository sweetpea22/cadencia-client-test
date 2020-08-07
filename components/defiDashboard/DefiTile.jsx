import { Card, Button, Badge } from "antd";
import styles from "./defiTile.module.css";

export const DefiTile = ({ imgSrc, handleClick, disabled }) => {
  const [isCardSelected, setCardSelected] = React.useState(false);

  return (
    <Card
      hoverable
      actions={[
        <Button disabled={disabled} onClick={handleClick}>
          Add to Data Bundle
        </Button>,
      ]}
      className={styles.defiTile}
      style={isCardSelected ? { border: "4px solid blue" } : null}
    >
      <img src={imgSrc}></img>
      {disabled ? (
        <p style={{ textAlign: "center", color: "darkgray" }}>Coming soon!</p>
      ) : null}
    </Card>
  );
};

export default DefiTile;
