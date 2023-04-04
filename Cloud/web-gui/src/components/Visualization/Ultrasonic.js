import { useState, useEffect, useContext } from "react";
import socketContext from "../../context/socket";
import LineChartIoT from "../LineChartIoT";

const Ultrasonic = () => {
  const socket = useContext(socketContext);

  const [ultrasonicData, setUltrasonicData] = useState([]);

  // move this to a Utility function
  const modifiedUltrasonic = ultrasonicData.map((cur) => {
    return {
      distance: cur.distance,
      timestamp: new Date(cur.timestamp),
    };
  });

  useEffect(() => {
    function onUltrasonicData(value) {
      let data = JSON.parse(value);
      setUltrasonicData((previous) => [
        ...previous,
        {
          distance: data.data.distance,
          timestamp: data.timestamp,
        },
      ]);
    }

    //Same as sensor fields in MQTT data
    socket.on("Ultrasonic", onUltrasonicData);

    return () => {
      socket.off("Ultrasonic", onUltrasonicData);
    };
  }, []);

  const config = {
    yaxis: "distance",
    data: modifiedUltrasonic,
  };

  return (
    <div>
      <h1 className="font-semibold text-gray-800">Ultrasonic in real time</h1>
      <LineChartIoT {...config} />
    </div>
  );
};

export default Ultrasonic;
