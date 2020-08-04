import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/MapComp"),
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
