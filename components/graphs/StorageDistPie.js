import {
  PieChart,
  Pie,
  Cell,
} from "recharts";

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


export const StorageDistPie = () => {
  return (
      <div>
        <h2>Data Make-up</h2>
        <div>{PieChartComp}</div>
      </div>
  );
};

export default StorageDistPie;