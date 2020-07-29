import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    netCap: "4",
    date: "2020-07-02"
  },
  {
    netCap: "7.3",
    date: "2020-07-03"
  },
  {
    netCap: "6",
    date: "2020-07-04"
  },
  {
    netCap: "5",
    date: "2020-07-05"
  },
  {
    netCap: "2",
    date: "2020-07-02"
  },
  {
    netCap: "7",
    date: "2020-07-03"
  },
  {
    netCap: "1",
    date: "2020-07-04"
  },
  {
    netCap: "3",
    date: "2020-07-05"
  },
];

const renderLineChart = (
  <AreaChart width={600} height={300} data={data}>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <YAxis />
    <XAxis />
    <Area type="monotone" dataKey="netCap" stroke="#8884d8" fill='#8884d8' strokeWidth={2} />
  </AreaChart>
);

export const NetCapArea = () => {
  return (
    <>
      <div>      
        <h2>Network Capacity (PiB)</h2>
        <div>{renderLineChart}</div>
      </div>
    </>
  );
}

export default NetCapArea;
