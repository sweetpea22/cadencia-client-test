import Heading from "../components/defiDashboard/Heading";
import DefiTile from "../components/defiDashboard/DefiTile";
import Layout from "../components/partials/Layout";
import Navbar from "../components/partials/Navbar";
import { Button } from "../components/antd";

export default () => {
  return (
    <>
      <Navbar />
      <Layout>
        <h4>To compare data, please select at least one organization.</h4>
        <p>
          0 datasets selected{" "}
          <span style={{ marginLeft: "3rem" }}>
            <Button>Compare</Button>
          </span>
        </p>
        <Heading title="Total Debt Volume" />
        <div style={{ display: "flex" }}>
          <DefiTile />
          <DefiTile />
          <DefiTile />
          <DefiTile />
        </div>
        <Heading title="Total Swap Volume" />
        <div style={{ display: "flex" }}>
          <DefiTile />
          <DefiTile />
          <DefiTile />
          <DefiTile />
        </div>
        <Heading title="Current Liquidity Volume" />
        <div style={{ display: "flex" }}>
          <DefiTile />
          <DefiTile />
          <DefiTile />
          <DefiTile />
        </div>
      </Layout>
    </>
  );
};
