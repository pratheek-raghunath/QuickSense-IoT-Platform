const { Server } = require("socket.io");
const mqtt = require('mqtt')
const { DataStreamModel, AlertModel } = require("./schema")

// io.emit - all client
// socket.emit - only specific client

// broker ocnfig
let client;

if(process.env.ENVIRONMENT == "prod") {
    client = mqtt.connect('mqtt://cloud-iot-paas-broker:1883')
} else {
    client = mqtt.connect('mqtt://localhost:1883')
}

client.on("connect", () => {
    client.subscribe('#')
})

// web socket server logic

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

  socket.on("buzzer", () => {
    data = {
            action:"toggle"
    }
    client.publish("/buzzer", JSON.stringify(data), { qos: 0, retain: false }, (error) => {
        if (error) {
          console.error(error)
        }
      })
    })

    socket.on("servo", () => {
        data = {
                action:"toggle"
        }
        client.publish("/servo", JSON.stringify(data), { qos: 0, retain: false }, (error) => {
            if (error) {
              console.error(error)
            }
          })
        })
});





// pushData();

// async function pushData() {
// while (true) {
//   data = await TemperatureModel.find().sort({ _id: -1}).limit(1).select({ temperature: 1, timestamp: 1,_id: 0}).exec();
//   console.log(data)
//   io.emit("temperature", JSON.stringify(data[0]));
//   await new Promise(resolve => setTimeout(resolve, 1000));
// }
// }


// worker node logic

client.on('message', (topic, message) => {
    //console.log(topic, JSON.parse(message))
    // Store data in MongoDB
    data = JSON.parse(message)

    if (topic == "buzzer" || topic == "servo") {
        //ignore
    }
    else if(topic.includes("alert")) {
        io.emit("alert", JSON.stringify(data))
        alert_instance = new AlertModel(data)

        alert_instance.save((err) => {
            if (err)
                console.log(err);
        });
    } else {
        //store data stream
        console.log(data.sensor)
        io.emit(data.sensor, JSON.stringify(data))
        data_stream_instance = new DataStreamModel(data)

        data_stream_instance.save((err) => {
            if (err)
                console.log(err);
        });
    }
});

