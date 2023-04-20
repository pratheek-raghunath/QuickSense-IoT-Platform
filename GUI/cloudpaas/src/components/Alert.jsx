import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";

const Alert = () => {
    const { socket, user }  = useContext(userContext);
  
    const [alerts, setAlerts] = useState([]);
  
    const latestalerts = [...alerts].reverse();
  
    console.log(alerts);
  
    useEffect(() => {
      function onAlert(value) {
        let alert = JSON.parse(value);
        setAlerts((previous) => [...previous, alert]);
      }
      
      console.log(`/${user.user_id}/alert`)
      socket.on(`/${user.user_id}/alert`, onAlert);
  
      return () => {
        socket.off(`/${user.user_id}/alert`, onAlert);
      };
    }, []);
  
    return (
      <div>
        <div className="bg-red m-20  flex flex-col items-center rounded-lg border border-gray-200  p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <h1 id="alert" class="mb-2 text-2xl font-bold tracking-tight ">
          Alerts in real time
        </h1>
        <ul class="font-normal text-gray-700 dark:text-gray-400">
          {latestalerts.map((alert) => {
            return (
              <li class="w-[90vw] p-6" key={alert.timestamp}>
                <div
                  id="container"
                  class="rounded-t  border border-black bg-white px-4 py-2 font-bold text-white"
                >
                  {alert.sensor}
                </div>
                <div
                  id="container"
                  class=" flex flex-col rounded-b border border-t-0 border-black  px-4 py-3 text-black"
                >
                  <div className="text-start">{alert.message}</div>
  
                  <div className="items-end justify-end text-start">
                    {alert.timestamp.substr(11, 10)}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    )
  }

export default Alert