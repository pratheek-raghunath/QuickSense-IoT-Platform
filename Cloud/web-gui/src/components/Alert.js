import {useState, useEffect, useContext} from 'react';
import socketContext from '../context/socket';

const Alert = () => {
    const socket = useContext(socketContext)

    const [alerts, setAlerts] = useState([]);

    const latestalerts = [...alerts].reverse()

    console.log(alerts)
  
    useEffect(() => {
      function onAlert(value) {
        let alert = JSON.parse(value)
        setAlerts(previous => [...previous, alert]);
      }
  
      socket.on('alert', onAlert);
  
      return () => {
        socket.off('alert', onAlert);
      };
    }, []);

    
    return (
      <div>
        <h1>Alerts in temperature real time</h1>
        <ul>
         {latestalerts.map(alert => {
            return <li key={alert.timestamp}>{alert.sensor} -  {alert.message} - {alert.timestamp}</li>
         })}
        </ul>
      </div>
    );
}

export default Alert