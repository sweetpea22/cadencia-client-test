const { PieChart, Pie, Tooltip } = "recharts";

export const PieChartComp = ({data}) => {
  return (
    <PieChart>
      <Pie data={data} 
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label>
      </Pie>
    </PieChart>
  )
}

export default PieChartComp;