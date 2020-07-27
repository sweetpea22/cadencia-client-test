import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/MapComp"),
  { ssr: false }
);

function MapComp() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}

export default MapComp;
