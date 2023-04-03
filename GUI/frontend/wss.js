const { Server } = require("socket.io");

//MongoDB stuff
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/cloud-iot-paas";

//check MongoDb connection
try {
  mongoose.connect(mongoDB);
  console.log("Connected to MongoDB");
} catch {
  console.log("Error connecting to MongoDB");
  process.exit();
}

// Define a schema
const Schema = mongoose.Schema;

const temperatureSchema = new Schema({
  temperature: Number,
  timestamp: Date,
});

const TemperatureModel = mongoose.model("Temperature", temperatureSchema);

//Setup mongodb change stream
// TemperatureModel.watch().
//   on('change', data => console.log(data));

// TemperatureModel.create({
//     "temperature": 110,
//     "timestamp": new Date(new Date().toUTCString())
// })

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});
let socket_id = null;

io.on("connection", (socket) => {
  console.log(socket.id);
  socket_id = socket.id;
  socket.emit("hello", "world");
});

pushData();

async function pushData() {
  while (true) {
    temp_data = await TemperatureModel.find()
      .sort({ _id: -1 })
      .limit(1)
      .select({ temperature: 1, timestamp: 1, _id: 0 })
      .exec();

    io.emit("temperature", JSON.stringify(temp_data[0]));

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
