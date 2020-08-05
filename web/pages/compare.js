import Heading from "../components/defiDashboard/Heading";
import DefiTile from "../components/defiDashboard/DefiTile";
import Layout from "../components/partials/Layout";
import Navbar from "../components/partials/Navbar";
import { Button, Badge } from "../components/antd";
import Link from "next/link";

export default () => {
  const [selectedData, setSelectedData] = React.useState([]);

  const addToBundle = (name) => {
    setSelectedData((name) => [...selectedData, name]);
    console.log(selectedData);
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
          {selectedData.length < 1 ? 0 : selectedData.length} datasets selected{" "}
          <span style={{ marginLeft: "3rem" }}>
            <Button type="primary">
              <Link href="/graphed">
                <a>Compare</a>
              </Link>
            </Button>
          </span>
        </p>

        <Heading title="Total Swap Volume" />
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile
              imgSrc="https://whatever12-team-bucket.storage.fleek.co/uniswap-03.png"
              handleClick={() => addToBundle("uniswap")}
            />
          </Badge.Ribbon>

          <DefiTile
            imgSrc="https://whatever12-team-bucket.storage.fleek.co/kyber.png"
            handleClick={() => addToBundle("kyber")}
          />
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/futureswap.svg" />
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/aave.jpg" />
          </Badge.Ribbon>
        </div>
        <Heading title="Total Debt Volume" />
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile
              imgSrc="https://whatever12-team-bucket.storage.fleek.co/kyber.png"
              name="kyber"
            />
          </Badge.Ribbon>
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/curve.png" />
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/bancor.png" />
          <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/futureswap.svg" />
        </div>
        <Heading title="Current Liquidity Volume" />
        <div style={{ display: "flex", marginBottom: "2rem" }}>
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
          <Badge.Ribbon
            text="Verified"
            color="geekblue"
            style={{ marginRight: ".8rem" }}
          >
            <DefiTile imgSrc="https://whatever12-team-bucket.storage.fleek.co/uniswap-03.png" />
          </Badge.Ribbon>

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
