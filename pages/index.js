import StoragePowerTable from "../components/StoragePowerTable";
import StoragePowerTiles from "../components/StoragePowerTiles";
import { DataTile } from "../components/DataTile";

export const Home = (props) => {
  return (
    <>
    <div style={{display: "flex", justifyContent: "space-evenly"}}>
      <StoragePowerTable />
      <StoragePowerTiles/>
    </div>
    </>
  );
};

export default Home;
