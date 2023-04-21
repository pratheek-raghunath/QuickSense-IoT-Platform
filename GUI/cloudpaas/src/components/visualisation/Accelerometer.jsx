import { useState, useEffect, useContext } from "react";
import userContext from "../../context/userContext";
import LineChartIoT from "../LineChartIoT";

const Accelerometer = () => {
  const { socket, user } = useContext(userContext);

  const [accelerometerData, setAccelerometerData] = useState([]);
  console.log(accelerometerData);

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
    socket.on(
      `/${user.user_id}/data_stream/accelerometer`,
      onAccelerometerData
    );

    return () => {
      socket.off(
        `/${user.user_id}/data_stream/accelerometer`,
        onAccelerometerData
      );
    };
  }, []);

  const config = {
    yaxis: "Gy",
    data: modifiedAccelerometer,
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="  mt-4   font-semibold text-white">Accelerometer</h1>
      <LineChartIoT {...config} />
    </div>
  );
};

export default Accelerometer;
