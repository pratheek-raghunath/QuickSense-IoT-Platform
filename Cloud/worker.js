const mqtt = require('mqtt')
const axios = require('axios')

const client = mqtt.connect('mqtt://localhost:1883')

// Import the mongoose module
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb://localhost:27017/cloud-iot-paas";

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


client.on("connect", () => {
    client.subscribe('#')
})

client.on('message', (topic, message) => {
    console.log(topic, JSON.parse(message))
    // Store data in MongoDB
    temperature_data = JSON.parse(message)
    const temperature_instance = new TemperatureModel(temperature_data);

    temperature_instance.save((err) => {
        if (err)
            console.log(err);
    });
});