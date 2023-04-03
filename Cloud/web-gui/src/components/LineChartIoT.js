import moment from 'moment';
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const LineChartIoT = ({ data, yaxis}) => {  

  console.log(data)
  console.log(yaxis)

    
    return (
        <LineChart width={500} height={300} data={data} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
          <XAxis dataKey="timestamp" label='time'  tickFormatter = {(timestamp) => moment(timestamp).format('HH:mm')} />
          <YAxis />
          <Tooltip />
          <Legend/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line  stroke="#82ca9d" dataKey={yaxis}   />
        </LineChart>
    );
}

export default LineChartIoT