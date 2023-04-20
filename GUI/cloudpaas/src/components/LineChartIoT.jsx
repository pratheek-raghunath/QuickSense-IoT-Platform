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

// const LineChartIoT = ({ data, yaxis }) => {
//   return (
//     <LineChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <XAxis
//         dataKey="timestamp"
//         minTickGap={50}
//         tickFormatter={(timestamp) => moment(timestamp).format("HH:mm")}
//       />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//       <Line stroke="#1D4ED8" dataKey={yaxis} />
//     </LineChart>
//   );
// };

function LineChartIoT() {
  return (
    <div className="App" style={{ width: "800px", height: "800px" }}>
      <h1>CPU temperature real time</h1>
      <LineChart
        width={500}
        height={300}
        data={modifiedTemp}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="timestamp" label="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line stroke="#82ca9d" dataKey="temperature" />
      </LineChart>
    </div>
  );
}

export default LineChartIoT;
