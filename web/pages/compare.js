import Heading from "../components/defiDashboard/Heading";
import DefiTile from "../components/defiDashboard/DefiTile";
import Layout from "../components/partials/Layout";
import Navbar from "../components/partials/Navbar";
import { Button, Badge } from "../components/antd";

export default () => {
  const [selectedData, setSelectedData] = React.useState(0);

  const addToBundle = () => {
    setSelectedData += 1;
  };

  return (
    <>
      <Navbar />
      <Layout>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Upload Your Own Dataset</Button>
        </div>
        <h4>To compare data, please select at least one organization.</h4>
        <p>
          {selectedData} datasets selected{" "}
          <span style={{ marginLeft: "3rem" }}>
            <Button>Compare</Button>
          </span>
        </p>
        <Heading title="Total Debt Volume" />
        <div style={{ display: "flex" }}>
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/kyber.png" />
          </Badge.Ribbon>
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/curve.png" />
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/bancor.png" />
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/futureswap.svg" />
        </div>
        <Heading title="Total Swap Volume" />
        <div style={{ display: "flex" }}>
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/uniswap-03.png" />
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/kyber.png" />
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/futureswap.svg" />
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/aave.jpg" />
          </Badge.Ribbon>
        </div>
        <Heading title="Current Liquidity Volume" />
        <div style={{ display: "flex" }}>
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/1024px-Seal_of_the_United_States_Federal_Reserve_System.svg.png" />
          </Badge.Ribbon>
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/etherscan-logo-circle.png" />
          </Badge.Ribbon>

          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/Screen%20Shot%202020-08-04%20at%209.48.13%20PM.png" />
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/Screen%20Shot%202020-08-04%20at%209.47.43%20PM.png" />
          </Badge.Ribbon>
        </div>
      </Layout>
    </>
  );
};
