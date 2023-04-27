import moment from "moment";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const LineChartIoT = ({ data, yaxis }) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis
        dataKey="timestamp"
        minTickGap={50}
        tickFormatter={(timestamp) => moment(timestamp).format("HH:mm")}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line stroke="#1D4ED8" dataKey={yaxis} />
    </LineChart>
  );
};

export default LineChartIoT;
