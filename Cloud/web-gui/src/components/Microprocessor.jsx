import "../styles/Microprocessorstyles.css";
import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";

const Microprocessor = () => {
  const { socket, user } = useContext(userContext);

  const [stats, setStats] = useState({
    cpu_temperature: 0,
    memory_usage: 0,
    cpu_usage: 0,
  });

  console.log(stats);

  useEffect(() => {
    function onstats(value) {
      let stats_data = JSON.parse(value);
      stats_data = stats_data.data;
      console.log(stats_data);
      setStats({
        cpu_temperature: stats_data.cpu_temperature,
        memory_usage: stats_data.memory_usage,
        cpu_usage: stats_data.cpu_usage,
      });
    }

    socket.on(`/${user.user_id}/data_stream/rpi`, onstats);

    return () => {
      socket.off(`/${user.user_id}/data_stream/rpi`, onstats);
    };
  }, []);
  return (
    <div>
      <h1 class="mt-9 flex flex-col items-center text-3xl font-bold tracking-tight text-blue-700">
        Microprocessor
        <img src="../../src/assets/Rpi.png" className="Rpi-logo" alt="Rpi" />
      </h1>
      <div
        id="temp"
        class=" max-h-fit max-w-fit rounded-lg bg-white p-6 shadow-lg shadow-slate-100  dark:bg-black"
      >
        <h5 class="mb-2 items-center justify-center text-xl  font-semibold leading-tight text-black ">
          CPU Temperature
        </h5>
        <p class="mb-4 font-semibold text-black ">
          {stats.cpu_temperature}ºc
          <img
            src="../../src/assets/thermometer.png"
            className="thermo"
            alt="thermometer"
          />
        </p>
      </div>
      <div
        id="memory"
        class=" float-right max-h-fit max-w-fit  rounded-lg bg-white p-6  shadow-lg shadow-slate-100 dark:bg-black"
      >
        <h5 class="mb-2 items-center justify-center text-xl  font-semibold leading-tight text-black ">
          Memory Usage
        </h5>
        <p class="mb-4 font-semibold text-black">
          {stats.memory_usage}%
          <img
            src="../../src/assets/memory.png"
            className="memory"
            alt="memoryusage"
          />
        </p>
      </div>
      <div
        id="cpu"
        class="  max-w-fit  rounded-lg bg-white p-6 shadow-lg shadow-slate-100 dark:bg-black"
      >
        <h5 class="mb-2 items-center justify-center text-xl  font-semibold leading-tight text-black ">
          CPU Usage
        </h5>
        <p class="mb-4 font-semibold text-black">
          {stats.cpu_usage}%
          <img
            src="../../src/assets/memory.png"
            className="memory"
            alt="memoryusage"
          />
        </p>
      </div>
    </div>
  );
};

export default Microprocessor;
