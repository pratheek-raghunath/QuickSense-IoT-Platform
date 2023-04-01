const { Server } = require("socket.io");
const {TemperatureModel} = require("./schema")

const io = new Server(3000, 
    {  
        cors: {
            origin: "*"
        }
    }
);
let socket_id = null;

io.on("connection", (socket) => {
    console.log(socket.id);
    socket_id = socket.id
    socket.emit("hello", "world");
});

pushData();

async function pushData() {
  while (true) {
    data = await TemperatureModel.find().sort({ _id: -1}).limit(1).select({ temperature: 1, timestamp: 1,_id: 0}).exec();
    console.log(data)
    io.emit("temperature", JSON.stringify(data[0]));
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
