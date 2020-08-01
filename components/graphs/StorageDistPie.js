import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#ED3030", "#97B3FE", "#3047ED"];

const RADIAN = Math.PI / 180;

const pieData = [
  { name: "Verified Data", value: 500 },
  { name: "Unverified Data", value: 900 },
  { name: "Available storage (Committed Capacity)", value: 300 },
];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  data,
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

export const StorageDistPie = () => {
  return (
    <div>
      <h2>Data Composition (in PiB)</h2>
      <PieChart width={300} height={400}>
        <Pie
          isAnimationActive={false}
          data={pieData}
          cx={150}
          cy={120}
          outerRadius={100}
          fill="#8884d8"
          label={renderCustomLabel}
          labelLine={false}
        >
          {pieData.map((datum, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StorageDistPie;
