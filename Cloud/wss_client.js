const { io } = require("socket.io-client");

const socket = io("localhost:3000");

socket.on("connection", (socket) => {
    console.log(socket);

});

socket.on("hello", (data) => {
    console.log("buzzer")
    socket.emit("buzzer", "toggle") 

    console.log("hello")
})
