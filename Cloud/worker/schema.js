const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

if(process.env.ENVIRONMENT == "prod") {
    const mongoDB = "mongodb://mongo/cloud-iot-paas";
}
else {
    const mongoDB = "mongodb://localhost:27017/cloud-iot-paas";
}

//check MongoDb connection
try {
    mongoose.connect(mongoDB)
    console.log("Connected to MongoDB")
} catch {
    console.log("Error connecting to MongoDB")
    process.exit()
}

// Define a schema
const Schema = mongoose.Schema;

const temperatureSchema = new Schema({
  temperature: Number,
  timestamp: Date,
});

const TemperatureModel = mongoose.model("Temperature", temperatureSchema);

module.exports = {
    temperatureSchema, TemperatureModel
}