import {useState, useEffect, useContext} from 'react';
import socketContext from '../../context/socket';
import LineChartIoT from '../LineChartIoT';

const Temperature = () => {

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
  
      //Same as sensor fields in MQTT data
      socket.on('temperature_sensor', onTemperatureData);
  
      return () => {
        socket.off('temperature_sensor', onTemperatureData);
      };
    }, []);

    
    const config = {
        yaxis: "temperature",
        data: modifiedTemp
    }
    
    return (
      <div>
        <h1>Temperature in real time</h1>
        <LineChartIoT {...config}/>  
      </div>
    );
}

export default Temperature