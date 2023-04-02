const { io } = require("socket.io-client");

const socket = io("http://wss.orensaldanha.live");

socket.on("connection", (socket) => {
    console.log(socket.id); 
});