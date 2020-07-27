import Layout from "../../components/layout";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 800, pv: 2400, amt: 5000 },
  { name: "Page C", uv: 1000, pv: 2400, amt: 6000 },
  { name: "Page D", uv: 1200, pv: 2400, amt: 2000 },
];

const renderLineChart = (
  <LineChart width={600} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis dataKey="amt" />
    <Tooltip />
  </LineChart>
);

export default function Home() {
  return (
    <Layout>
      <main>
        <h2>Sector Size</h2>
        <div>{renderLineChart}</div>
      </main>
      <main>
        <h2>Sector Size</h2>
        <div>{renderLineChart}</div>
      </main>
    </Layout>
  );
}
