import React from "react";
import "../Alertstyles.css";

function Alerts() {
  const list = [
    {
      sensor: "alert1",
      message: "alert",
      timestamp: "2023-04-04",
    },
    {
      sensor: "alert2",
      message: "alert",
      timestamp: "2023-05-04",
    },
  ];

  return (
    <div className="container-alert">
      <h1>Alerts</h1>
      <ol>
        {list.map((item) => (
          <li key={item.sensor}>
            <div>{item.sensor}</div>
            <div>{item.message}</div>
            <div>{item.timestamp}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Alerts;
