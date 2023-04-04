const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

setInterval(function() {
    console.log("buzz")
    socket.emit("buzzer", "toggle");
}, 100);