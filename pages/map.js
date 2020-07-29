import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/MapComp"),
  { ssr: false }
);

function MapComp() {
  return (
    <>
    <h1></h1>
    <div>
      <DynamicComponentWithNoSSR />
    </div>
    </>
  );
}

export default MapComp;
