import StoragePowerTable from "../components/StoragePowerTable";
import StoragePowerTiles from "../components/StoragePowerTiles";
import NetCapArea from "../components/graphs/NetCapArea";
import TotalStoredArea from "../components/graphs/TotalStoredArea";
import DealTiles from "../components/DealTiles";

export const Home = (props) => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <StoragePowerTable />
        <StoragePowerTiles/>
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <NetCapArea/>
        <TotalStoredArea/>
      </div>
        <DealTiles/>
      </div>
    </>
  );
};

export default Home;
