import { useContext, useState, useEffect } from "react";
import userContext from "../../context/userContext";
import LineChartIoT from "../LineChartIoT";

const Temperature = () => {
  const { socket, user } = useContext(userContext);

  const [temperatureData, setTemperatureData] = useState([]);

  console.log(temperatureData);

  // move this to a Utility function
  const modifiedTemp = temperatureData.map((cur) => {
    return {
      temperature: cur.temperature,
      timestamp: new Date(cur.timestamp),
    };
  });

  useEffect(() => {
    function onTemperatureData(value) {
      let data = JSON.parse(value);
      setTemperatureData((previous) => [
        ...previous,
        {
          temperature: data.data.temperature,
          timestamp: data.timestamp,
        },
      ]);
    }

    //Same as sensor fields in MQTT data
    socket.on(`/${user.user_id}/data_stream/temperature`, onTemperatureData);

    return () => {
      socket.off(`/${user.user_id}/data_stream/temperature`, onTemperatureData);
    };
  }, []);
  const config = {
    yaxis: "temperature",
    data: modifiedTemp,
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="  mt-4   font-semibold text-white">Temperature</h1>
      <LineChartIoT {...config} />
    </div>
  );
};

export default Temperature;
