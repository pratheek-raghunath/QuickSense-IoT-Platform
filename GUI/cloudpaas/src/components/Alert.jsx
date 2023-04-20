import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import "../styles/Alertstyles.css";

const Alert = () => {
  const { socket, user } = useContext(userContext);

  const [alerts, setAlerts] = useState([]);

  const latestalerts = [...alerts].reverse();

  console.log(alerts);

  useEffect(() => {
    function onAlert(value) {
      let alert = JSON.parse(value);
      setAlerts((previous) => [...previous, alert]);
    }

    console.log(`/${user.user_id}/alert`);
    socket.on(`/${user.user_id}/alert`, onAlert);

    return () => {
      socket.off(`/${user.user_id}/alert`, onAlert);
    };
  }, []);

  return (
    <div>
      <h1
        id="alert"
        class="mt-9 flex flex-col items-center text-3xl font-bold tracking-tight text-blue-700"
      >
        Alerts
      </h1>
      <div className="m-15  flex flex-col items-center rounded-lg    p-6   ">
        <ul class="font-normal text-gray-700 dark:text-gray-400">
          {latestalerts.map((alert) => {
            return (
              <li class="w-[70vw] p-6" key={alert.timestamp}>
                <div class="m-4" role="alert">
                  <div
                    id="container"
                    class="rounded-t bg-rose-100 px-4 py-2 font-bold text-black"
                  >
                    {alert.sensor}
                  </div>
                  <div
                    id="container"
                    class=" flex items-center justify-between rounded-b bg-red-100 px-4 py-3 text-black"
                  >
                    <div className=" text-center">{alert.message}</div>
                    <div className=" text-right">
                      {alert.timestamp.substr(11, 5)}{" "}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Alert;
