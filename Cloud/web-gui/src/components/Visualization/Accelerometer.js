import { useState, useEffect, useContext } from "react";
import socketContext from "../../context/socket";
import LineChartIoT from "../LineChartIoT";

const Accelerometer = () => {
  const socket = useContext(socketContext);

  const [accelerometerData, setAccelerometerData] = useState([]);

  // move this to a Utility function
  const modifiedAccelerometer = accelerometerData.map((cur) => {
    return {
      Gy: cur.Gy,
      timestamp: new Date(cur.timestamp),
    };
  });

  useEffect(() => {
    function onAccelerometerData(value) {
      let data = JSON.parse(value);
      setAccelerometerData((previous) => [
        ...previous,
        {
          Gy: data.data.Gy,
          timestamp: data.timestamp,
        },
      ]);
    }

    //Same as sensor fields in MQTT data
    socket.on("Accelerometer", onAccelerometerData);

    return () => {
      socket.off("Accelerometer", onAccelerometerData);
    };
  }, []);

  const config = {
    yaxis: "Gy",
    data: modifiedAccelerometer,
  };

  return (
    <div>
      <h1 className="font-semibold text-gray-800">
        Accelerometer in real time
      </h1>
      <LineChartIoT {...config} />
    </div>
  );
};

export default Accelerometer;
