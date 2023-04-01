const mqtt = require('mqtt')
const axios = require('axios')

const client = mqtt.connect('mqtt://localhost:1883')

const {TemperatureModel} = require("./schema")

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