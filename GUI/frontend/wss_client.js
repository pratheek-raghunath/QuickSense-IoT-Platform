const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connection", (socket) => {
  console.log(socket.id);
});

socket.on("temperature", (temp_data) => {
  console.log(JSON.parse(temp_data));
});
