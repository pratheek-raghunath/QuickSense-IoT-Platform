import { useState, useEffect, useContext } from "react";
import socketContext from "../context/socket";
import "../styles/Alertstyles.css";

const Alert = () => {
  const socket = useContext(socketContext);

  const [alerts, setAlerts] = useState([]);

  const latestalerts = [...alerts].reverse();

  console.log(alerts);

  useEffect(() => {
    function onAlert(value) {
      let alert = JSON.parse(value);
      setAlerts((previous) => [...previous, alert]);
    }

    socket.on("alert", onAlert);

    return () => {
      socket.off("alert", onAlert);
    };
  }, []);

  return (
    <div class="bg-red m-20  flex flex-col items-center rounded-lg border border-gray-200  p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h1
        id="alert"
        class="mb-2 text-2xl font-bold tracking-tight "
        // text-gray-900 dark:text-white
      >
        Alerts in temperature real time
      </h1>
      <ul class="font-normal text-gray-700 dark:text-gray-400">
        {latestalerts.map((alert) => {
          return (
            <li key={alert.timestamp}>
              {alert.sensor} - {alert.message} - {alert.timestamp}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Alert;

// import React from "react";
// import "../styles/Alertstyles.css";

// function Alert() {
//   const list = [
//     {
//       sensor: "alert1",
//       message: "alert",
//       timestamp: "2023-04-04",
//     },
//     {
//       sensor: "alert1",
//       message: "alert",
//       timestamp: "2023-04-04",
//     },
//     {
//       sensor: "alert1",
//       message: "alert",
//       timestamp: "2023-04-04",
//     },
//     {
//       sensor: "alert1",
//       message: "alert",
//       timestamp: "2023-04-04",
//     },
//     {
//       sensor: "alert1",
//       message: "alert",
//       timestamp: "2023-04-04",
//     },
//     {
//       sensor: "alert1",
//       message: "alert",
//       timestamp: "2023-04-04",
//     },
//   ];

//   return (
//     <div class="bg-red m-20  flex flex-col items-center rounded-lg border border-gray-200  p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
//       <h1
//         id="alert"
//         class="mb-2 text-2xl font-bold tracking-tight "
//         // text-gray-900 dark:text-white
//       >
//         Alerts
//       </h1>
//       <ul class="font-normal text-gray-700 dark:text-gray-400">
//         {list.map((item) => (
//           <li key={item.sensor}>
//             {item.sensor} - {item.message} - {item.timestamp}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Alert;
