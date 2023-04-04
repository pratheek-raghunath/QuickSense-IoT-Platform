import { useState, useEffect, useContext } from "react";
import socketContext from "../../context/socket";
import LineChartIoT from "../LineChartIoT";

const Gas = () => {
  const socket = useContext(socketContext);

  const [gasData, setGasData] = useState([]);

  // move this to a Utility function
  const modifiedGas = gasData.map((cur) => {
    return {
      value: cur.value,
      timestamp: new Date(cur.timestamp),
    };
  });

  useEffect(() => {
    function onGasData(value) {
      let data = JSON.parse(value);
      setGasData((previous) => [
        ...previous,
        {
          value: data.data.value,
          timestamp: data.timestamp,
        },
      ]);
    }

    //Same as sensor fields in MQTT data
    socket.on("Gas", onGasData);

    return () => {
      socket.off("Gas", onGasData);
    };
  }, []);

  const config = {
    yaxis: "value",
    data: modifiedGas,
  };

  return (
    <div>
      <h1>Gas in real time</h1>
      <LineChartIoT {...config} />
    </div>
  );
};

export default Gas;