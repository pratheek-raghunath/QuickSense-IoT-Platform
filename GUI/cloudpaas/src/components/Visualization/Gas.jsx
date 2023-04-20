// import { useState, useEffect, useContext } from "react";
// import socketContext from "../../context/socket";
// import LineChartIoT from "../LineChartIoT";

// const Gas = () => {
//   const app_context = useContext(socketContext);
//   const socket = app_context.socket;
//   const user_id = app_context.user_id;

//   const [gasData, setGasData] = useState([]);

//   // move this to a Utility function
//   const modifiedGas = gasData.map((cur) => {
//     return {
//       value: cur.value,
//       timestamp: new Date(cur.timestamp),
//     };
//   });

//   useEffect(() => {
//     function onGasData(value) {
//       let data = JSON.parse(value);
//       setGasData((previous) => [
//         ...previous,
//         {
//           value: data.data.value,
//           timestamp: data.timestamp,
//         },
//       ]);
//     }

//     //Same as sensor fields in MQTT data
//     socket.on(`/${user_id}/data_stream/gas`, onGasData);

//     return () => {
//       socket.off(`/${user_id}/data_stream/gas`, onGasData);
//     };
//   }, []);

//   const config = {
//     yaxis: "value",
//     data: modifiedGas,
//   };

//   return (
//     <div>
//       <h1 className="ml-6 mt-4 font-semibold text-gray-800">
//         Gas in real time
//       </h1>
//       <LineChartIoT {...config} />
//     </div>
//   );
// };

// export default Gas;
