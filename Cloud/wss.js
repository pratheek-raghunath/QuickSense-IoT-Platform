const { Server } = require("socket.io");
const mqtt = require('mqtt')
const { DataStreamModel, AlertModel } = require("./schema")

// io.emit - all client
// socket.emit - only specific client

// broker config
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

let sockets = [];

setInterval(() => {
    console.log("\n\nSOCKETS")
    sockets.map(socket => {
        console.log(socket.socket.id, socket.user_id)
    })
    console.log("\n\n")
}, 3000)

io.on("connection", (socket) => {
    user_id = socket.handshake.query.user_id
    sockets.push({
        socket: socket,
        user_id: user_id
    })

    socket.emit("hello", "world");

    socket.on(`/${user_id}/action/buzzer`, () => {
        data = {
                action:"toggle"
        }
        client.publish(`/${user_id}/action/buzzer`, JSON.stringify(data), { qos: 0, retain: false }, (error) => {
            if (error) {
            console.error(error)
            }
        })
    })

    socket.on(`/${user_id}/action/servo`, () => {
        data = {
                action:"toggle"
        }
        client.publish(`/${user_id}/action/servo`, JSON.stringify(data), { qos: 0, retain: false }, (error) => {
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
    
    user_id = topic.split("/")[1]

    if(topic.includes("alert")) {
        console.log(topic)

        data = JSON.parse(message)

        //Send to GUI
        sockets.map(socket => {
            
            if(socket.user_id === user_id) {
                socket.socket.emit(topic, JSON.stringify(data))
            }
                
        })
        //io.emit("alert", JSON.stringify(data))

        alert_instance = new AlertModel(data)
        alert_instance.save((err) => {
            if (err)
                console.log(err);
        });
    } else if(topic.includes("data_stream")) {
        //store data stream
        console.log(topic)

        data = JSON.parse(message)

        //Send to GUI
        sockets.map(socket => {
            
            if(socket.user_id === user_id) {
                socket.socket.emit(topic, JSON.stringify(data))
            }
                
        })
        //io.emit(data.sensor, JSON.stringify(data))

        data_stream_instance = new DataStreamModel(data)
        data_stream_instance.save((err) => {
            if (err)
                console.log(err);
        });
    } else {
        // do nothing
    }
});

