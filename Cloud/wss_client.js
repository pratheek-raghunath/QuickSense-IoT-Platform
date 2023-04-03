const { io } = require("socket.io-client");

const socket = io("localhost:3000");

socket.on("connection", (socket) => {
    console.log(socket.id);
    socket.emit("buzzer", "toggle") 
});