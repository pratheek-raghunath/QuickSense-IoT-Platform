// import { useState, useEffect, useContext } from "react";
// import socketContext from "../../context/socket";
// import LineChartIoT from "../LineChartIoT";

// const Temperature = () => {
//   const app_context = useContext(socketContext);
//   const socket = app_context.socket;
//   const user_id = app_context.user_id;

//   const [temperatureData, setTemperatureData] = useState([]);

//   // move this to a Utility function
//   const modifiedTemp = temperatureData.map((cur) => {
//     return {
//       temperature: cur.temperature,
//       timestamp: new Date(cur.timestamp),
//     };
//   });

//   useEffect(() => {
//     function onTemperatureData(value) {
//       let data = JSON.parse(value);
//       setTemperatureData((previous) => [
//         ...previous,
//         {
//           temperature: data.data.temperature,
//           timestamp: data.timestamp,
//         },
//       ]);
//     }

//     //Same as sensor fields in MQTT data
//     socket.on(`/${user_id}/data_stream/temperature`, onTemperatureData);

//     return () => {
//       socket.off(`/${user_id}/data_stream/temperature`, onTemperatureData);
//     };
//   }, []);

//   const config = {
//     yaxis: "temperature",
//     data: modifiedTemp,
//   };

//   return (
//     <div>
//       <h1 className="ml-6 mt-4 font-semibold text-gray-800">
//         Temperature in real time
//       </h1>
//       <LineChartIoT {...config} />
//     </div>
//   );
// };

// export default Temperature;
