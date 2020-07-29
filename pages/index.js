import Navbar from "../components/Navbar";
import StoragePowerTable from "../components/StoragePowerTable";
import StoragePowerTiles from "../components/StoragePowerTiles";
import NetCapArea from "../components/graphs/NetCapArea";
import TotalStoredArea from "../components/graphs/TotalStoredArea";
import DealTiles from "../components/DealTiles";
import StorageDistPie from "../components/graphs/StorageDistPie";

export const Home = (props) => {
  return (
    <>
      <Navbar/>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <StoragePowerTable />
        <StoragePowerTiles/>
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
      <div style={{display: "flex", flexDirection: "column", marginLeft:"2rem", width: "650px"}}>
        <NetCapArea/>
        <TotalStoredArea/>
      </div>
      <div style={{display: "flex", flexDirection: "row", marginLeft:"2rem"}}>
        <DealTiles/>
      </div>
      <div style={{display: "flex", flexDirection: "row", marginTop:"2rem", marginLeft: "-6.5rem"}}>
        <StorageDistPie/>
      </div>
      </div>
    </>
  );
};

export default Home;
