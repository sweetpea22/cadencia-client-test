import Navbar from "../components/filecoinDashboard/Navbar";
import StoragePowerTable from "../components/filecoinDashboard/StoragePowerTable";
import StoragePowerTiles from "../components/filecoinDashboard/StoragePowerTiles";
import NetCapArea from "../components/filecoinDashboard/graphs/NetCapArea";
import TotalStoredArea from "../components/filecoinDashboard/graphs/TotalStoredArea";
import DealTiles from "../components/filecoinDashboard/DealTiles";
import StorageDistPie from "../components/filecoinDashboard/graphs/StorageDistPie";

export const Dashboard = (props) => {
  return (
    <>
      <Navbar onFilecoinPage />
      <main className="main">
        <div className="columnWrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
              width: "650px",
              marginTop: "4rem",
            }}
          >
            <NetCapArea />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            >
              <DealTiles />
              <StorageDistPie />
            </div>
            <TotalStoredArea />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "46%",
            marginLeft: "9rem",
          }}
        >
          <StoragePowerTable />
          <StoragePowerTiles />
        </div>
      </main>
    </>
  );
};

export default Dashboard;