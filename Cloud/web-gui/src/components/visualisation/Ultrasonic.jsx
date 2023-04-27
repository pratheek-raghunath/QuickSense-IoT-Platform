import { useState, useEffect, useContext } from "react";
import userContext from "../../context/userContext";
import LineChartIoT from "../LineChartIoT";

const Ultrasonic = () => {
  const { socket, user } = useContext(userContext);

  const [ultrasonicData, setUltrasonicData] = useState([]);
  console.log(ultrasonicData);

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
    socket.on(`/${user.user_id}/data_stream/ultrasonic`, onUltrasonicData);

    return () => {
      socket.off(`/${user.user_id}/data_stream/ultrasonic`, onUltrasonicData);
    };
  }, []);

  const config = {
    yaxis: "distance",
    data: modifiedUltrasonic,
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="  mt-4   font-semibold text-white">Ultrasonic</h1>
      <LineChartIoT {...config} />
    </div>
  );
};

export default Ultrasonic;
