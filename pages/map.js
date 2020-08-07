import dynamic from "next/dynamic";
import Navbar from "../components/partials/Navbar";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/filecoinDashboard/MapComp"),
  { ssr: false }
);

function MapComp() {
  return (
    <>
      <div>
        <Navbar />
        <DynamicComponentWithNoSSR />
      </div>
    </>
  );
}

export default MapComp;
