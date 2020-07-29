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
    netCap: "200",
    date: "2020-07-02"
  },
  {
    netCap: "300",
    date: "2020-07-03"
  },
  {
    netCap: "330",
    date: "2020-07-04"
  },
  {
    netCap: "337",
    date: "2020-07-05"
  },
  {
    netCap: "350",
    date: "2020-07-02"
  },
  {
    netCap: "375",
    date: "2020-07-03"
  },
  {
    netCap: "400",
    date: "2020-07-04"
  },
  {
    netCap: "410",
    date: "2020-07-05"
  },
];

const renderLineChart = (
  <AreaChart width={700} height={300} data={data}>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <YAxis />
    <XAxis />
    <Area type="monotone" dataKey="netCap" stroke="#8884d8" fill='#8884d8' strokeWidth={2} />
  </AreaChart>
);

export const NetCapArea = () => {
  return (
    <>
      <div style={{marginBottom: "2rem"}}>      
        <h2>Network Capacity (PiB)</h2>
        <div>{renderLineChart}</div>
      </div>
    </>
  );
}

export default NetCapArea;
