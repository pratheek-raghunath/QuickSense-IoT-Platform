import { useState, useEffect, useContext } from "react";
import userContext from "../../context/userContext";
import LineChartIoT from "../LineChartIoT";

const Gas = () => {
  const { socket, user } = useContext(userContext);

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
    socket.on(`/${user.user_id}/data_stream/gas`, onGasData);

    return () => {
      socket.off(`/${user.user_id}/data_stream/gas`, onGasData);
    };
  }, []);

  const config = {
    yaxis: "value",
    data: modifiedGas,
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="  mt-4   font-semibold text-white">Gas</h1>
      <LineChartIoT {...config} />
    </div>
  );
};

export default Gas;
