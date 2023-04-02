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

const socket = io("http://wss.orensaldanha.live");

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [temperatureData, setTemperatureData] = useState([]);

  // move this to a Utility function
  const modifiedTemp = temperatureData.map(cur => {
    return {
      temperature: cur.temperature, 
      timestamp: new Date(cur.timestamp)
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
      let data = JSON.parse(value)
      console.log(data)
      setTemperatureData(previous => [...previous, {
        temperature: data.data.temperature,
        timestamp: data.timestamp
      }]);
    }

    function onAlert(value) {
      console.log(value)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('temperature', onTemperatureData);
    socket.on('alert', onAlert);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('temperature', onTemperatureData);
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
        <XAxis dataKey="timestamp" label='time'  tickFormatter = {(timestamp) => moment(timestamp).format('HH:mm')} />
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