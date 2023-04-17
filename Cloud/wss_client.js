const { io } = require("socket.io-client");

USER_ID = process.env.USER_ID

const socket = io("http://localhost:3000", {
    query: {
        "user_id": "643bfb6ab0324c8ec1cea8f0"
    }
});

console.log(`/${USER_ID}/data_stream/temperature`)

socket.on(`/${USER_ID}/data_stream/temperature`, (data) => {
    console.log(data)
})

socket.on(`/${USER_ID}/alert/pressure`, (data) => {
    console.log(data)
})


setInterval(() => {
    console.log("Emitting buzzer")
    socket.emit(`/${USER_ID}/action/buzzer`)
}, 3000)
