import Heading from "../components/defiDashboard/Heading";
import DefiTile from "../components/defiDashboard/DefiTile";

export default () => {
  return (
    <>
      <h1>To compare data, please select at least one organization.</h1>
      <Heading title="Total Debt" />
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
      <Heading title="Current Liquidity" />
      <div style={{ display: "flex" }}>
        <DefiTile />
        <DefiTile />
        <DefiTile />
        <DefiTile />
      </div>
    </>
  );
};
