import { useState, useEffect, useContext } from "react";
import socketContext from "../context/socket";
import "../styles/Alertstyles.css";

const Stats = () => {
  const app_context = useContext(socketContext);
  const socket = app_context.socket
  const user_id = app_context.user_id

  const [stats, setStats] = useState({
    cpu_temperature: 0,
    memory_usage: 0,
    cpu_usage: 0
  });

  console.log(stats);

  useEffect(() => {
    function onstats(value) {
      let stats_data = JSON.parse(value);
      stats_data = stats_data.data
      console.log(stats_data)
      setStats({
        cpu_temperature: stats_data.cpu_temperature,
        memory_usage: stats_data.memory_usage,
        cpu_usage: stats_data.cpu_usage
      });
    }

    socket.on(`/${user_id}/data_stream/rpi`, onstats);

    return () => {
      socket.off(`/${user_id}/data_stream/rpi`, onstats);
    };
  }, []);

  return (
    <div>
      <p>CPU temp - {stats.cpu_temperature}</p>
      <p>CPU usage - {stats.cpu_usage}</p>
      <p>Memory usage - {stats.memory_usage}</p>
    </div>
  );
};

export default Stats;