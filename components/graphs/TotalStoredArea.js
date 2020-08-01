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
    totalStorage: "110",
    date: "2020-07-02"
  },
  {
    totalStorage: "120",
    date: "2020-07-03"
  },
  {
    totalStorage: "160",
    date: "2020-07-04"
  },
  {
    totalStorage: "170",
    date: "2020-07-05"
  },
  {
    totalStorage: "223",
    date: "2020-07-06"
  },
  {
    totalStorage: "220",
    date: "2020-07-07"
  },
  {
    totalStorage: "240",
    date: "2020-07-08"
  },
];

const renderAreaChart = (
  <AreaChart width={700} height={250} data={data}>
    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
    <YAxis  domain={['dataMin', 'dataMax']} />
    <XAxis/>
    <Area type="monotone" dataKey="totalStorage" stroke="#9A00D7" fill='#CF86FA' strokeWidth={2} />
  </AreaChart>
);

export const TotalStorageArea = () => {
  return (
    <>
      <div>      
        <h2>Total Data Stored (PiB)</h2>
        <div>{renderAreaChart}</div>
      </div>
    </>
  );
}

export default TotalStorageArea;
