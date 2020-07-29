import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Layout from "../../components/layout";
import { Input } from "../../components/antd/index";

const { Search } = Input;

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const COLORS = ["#ED3030", "#97B3FE", "#3047ED"];

const RADIAN = Math.PI / 180;

const pieData = [
  { name: "Verified Data", value: 900 },
  { name: "Unverified Data", value: 2300 },
  { name: "Available storage (committed capacity)", value: 300 },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimpleBarChart = (
  <BarChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip content={data.name} />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
);

const PieChartComp = (
  <PieChart width={800} height={400}>
    <Pie
      data={pieData}
      cx={500}
      cy={500}
      outerRadius={80}
      fill="#8884d8"
      label={renderCustomizedLabel}
      labelLine={false}
    >
      {pieData.map((i, index) => (
        <Cell fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default function Home() {
  return (
    <Layout>
      <Search
        placeholder="Search for a city, country, ZIP Code"
        style={{ width: 500 }}
      />
      <main>
        <h2>Sector Size</h2>
        <div>{SimpleBarChart}</div>
        <div>{PieChartComp}</div>
      </main>
    </Layout>
  );
}
