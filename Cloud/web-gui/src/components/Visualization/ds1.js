import {useState, useEffect, useContext} from 'react';
import socketContext from '../../context/socket';
import LineChartIoT from '../LineChartIoT';

const Ds1 = () => {

    const socket = useContext(socketContext)

    const [temperatureData, setTemperatureData] = useState([]);
  
    // move this to a Utility function
    const modifiedTemp = temperatureData.map(cur => {
      return {
        temperature: cur.temperature, 
        timestamp: new Date(cur.timestamp)
      }
    }
    )
  
  
    useEffect(() => {
      function onTemperatureData(value) {
        let data = JSON.parse(value)
        setTemperatureData(previous => [...previous, {
          temperature: data.data.temperature,
          timestamp: data.timestamp
        }]);
      }
  
  
      socket.on('ds1', onTemperatureData);
  
      return () => {
        socket.off('ds1', onTemperatureData);
      };
    }, []);

    
    const config = {
        yaxis: "temperature",
        data: modifiedTemp
    }
    
    return (
      <div>
        <h1>DS1 CPU temperature real time</h1>
        <LineChartIoT {...config}/>  
      </div>
    );
}

export default Ds1