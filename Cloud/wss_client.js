const { io } = require("socket.io-client");

USER_ID = process.env.USER_ID

const socket = io("http://wss.orensaldanha.live", {
    query: {
        "user_id": process.env.USER_ID
    }
});

console.log(`/${USER_ID}/data_stream/temperature`)

socket.on(`/${USER_ID}/data_stream/temperature`, (data) => {
    console.log(data)
})

socket.on(`/${USER_ID}/alert`, (data) => {
    console.log(data)
})


setInterval(() => {
    console.log("Emitting buzzer")
    socket.emit(`/${USER_ID}/action/buzzer`)
}, 3000)
