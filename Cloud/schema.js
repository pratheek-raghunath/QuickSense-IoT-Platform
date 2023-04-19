const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

let mongoDB;

if(process.env.ENVIRONMENT == "prod") {
    mongoDB = "mongodb://cloud-iot:asDDffb@mongo/";
}
else {
    mongoDB = "mongodb://cloud-iot:asDDffb@localhost:27017/";
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

const dataStreamSchema = new Schema({
    sensor: String,
    user_id: String,
    data: Object,
    timestamp: Date,
})

const DataStreamModel = mongoose.model("DataStream", dataStreamSchema);

const alertSchema = new Schema({
    sensor: String,
    user_id: String,
    message: String,
    timestamp: Date,
})

const AlertModel = mongoose.model("Alert", alertSchema);

const userSchema = new Schema({
    email: String,
    username: String, 
    password: String,
    sensors: [String]
})

const UserModel = mongoose.model("User", userSchema);

module.exports = {
    TemperatureModel, DataStreamModel, AlertModel, UserModel
}