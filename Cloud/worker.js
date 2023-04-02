const mqtt = require('mqtt')
const axios = require('axios')
const { TemperatureModel, DataStreamModel, AlertModel } = require("./schema")


let client;

if(process.env.ENVIRONMENT == "prod") {
    client = mqtt.connect('mqtt://cloud-iot-paas-broker:1883')
} else {
    client = mqtt.connect('mqtt://localhost:1883')
}


client.on("connect", () => {
    client.subscribe('#')
})

client.on('message', (topic, message) => {
    console.log(topic, JSON.parse(message))
    // Store data in MongoDB
    data = JSON.parse(message)

    if (topic == "/temp") {
        const temperature_instance = new TemperatureModel(data);

        temperature_instance.save((err) => {
            if (err)
                console.log(err);
        });
    } else if(topic.includes("alert")) {
        alert_instance = new AlertModel(data)

        alert_instance.save((err) => {
            if (err)
                console.log(err);
        });
    } else {
        //store data stream
        data_stream_instance = new DataStreamModel(data)

        data_stream_instance.save((err) => {
            if (err)
                console.log(err);
        });
    }
});