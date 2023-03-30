import {useState, useEffect} from 'react';
import moment from 'moment';
import { io } from 'socket.io-client';
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const socket = io("http://localhost:3000");

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [temperatureData, setTemperatureData] = useState([]);

  const temp = temperatureData.map(data => data.temperature)
  const timestamp = temperatureData.map(data => data.timestamp)

  const modifiedTemp = temperatureData.map(cur => {
    return {
      temperature: cur.temperature, 
      timestamp: new Date(cur.timestamp).toLocaleTimeString()
    }
  }
  )

  console.log(modifiedTemp)

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onTemperatureData(value) {
      setTemperatureData(previous => [...previous, JSON.parse(value)]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('temperature', onTemperatureData);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onTemperatureData);
    };
  }, []);

  
  return (
    <div className="App" style={{width:'800px', height:'800px'}}>
      <h1>CPU temperature real time</h1>
      <LineChart width={500} height={300} data={modifiedTemp} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
        <XAxis dataKey="timestamp" label='time'  tickFormatter = {(unixTime) => moment(unixTime).format('HH:mm')} />
        <YAxis />
        <Tooltip />
        <Legend/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line  stroke="#82ca9d" dataKey="temperature"   />
      </LineChart>

    </div>
  );
}

export default App;
