const { UserModel, DataStreamModel } = require("./schema")
const morgan = require('morgan');
const jwt = require('jsonwebtoken')
const cors = require('cors')

const express = require('express')
const app = express()
const port = 3002

const jwt_secret = "my-secret"

//middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

const verify_token = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, jwt_secret, (err, user) => {
      if (err) {
        return res.status(403).json({"error": "Token is is not valid"})
      }

      req.user = user
      next()
    })
  } else {
    res.status(401).json({"error": "You are not authenticated"})
  }
}


//user routes
app.get('/users', verify_token,  async (req, res) => {
  users = await UserModel.find().exec()
  console.log(users)
  res.json(users)
})

app.post('/users', async (req, res) => {
  user = req.body
  console.log(req.body)

  //check if user exists
  const existing_user = await UserModel.findOne({username : user.username }).exec() 
  if(!existing_user) {
    user_instance = new UserModel(user)
    user_instance.save((err) => {
        if (err)
            console.log(err);
    });
    console.log("User created successfully")
    res.status(201).json({"message": "User created successfully"})
  } else {
    res.status(409).json({"message": "User already exists"})
  }
  
})

app.get('/users/:id', verify_token, async (req, res) => {
  user_id = req.params.id
  console.log(`user_id: ${user_id}`)
  user = await UserModel.findById(user_id).exec()
  if (!user) {
    res.status(404).send({"error": "User not found"})
  } else {
    // if (req.user.id !== user_id){
    //   res.status(403).json({"error": "User not allowed to access this resource"})
    // } else {
      
    // }
    res.json(user)
  }
})

app.put('/users/:id/add_sensor', verify_token, async (req, res) => {
  user_id = req.params.id
  sensor = req.body.sensor

  user = await UserModel.findById(user_id).exec()
  if (!user) {
    return res.status(404).send({"error": "User not found"})
  } 

  console.log(user)
  console.log(req.sensor)
  console.log(user_id)

  if(!user.sensors.includes(sensor)) {
    await UserModel.findOneAndUpdate({_id: user_id}, {sensors: user.sensors.concat(sensor)})
  }

  res.status(200).json({"message": "Sensor added successfully"})
})

app.put('/users/:id/remove_sensor', verify_token, async (req, res) => {
  user_id = req.params.id
  sensor = req.body.sensor

  user = await UserModel.findById(user_id).exec()
  if (!user) {
    return res.status(404).send({"error": "User not found"})
  } 

  console.log(user)
  console.log(req.sensor)
  console.log(user_id)

  if(user.sensors.includes(sensor)) {
    await UserModel.findOneAndUpdate({_id: user_id}, {sensors: user.sensors.filter((value, index, arr) => {return value != sensor})})
  }

  res.status(200).json({"message": "Sensor removed successfully"})
})

//authentication
app.post("/auth/login", async (req, res) => {
  const {username, password} = req.body

  //validate that user credentials are valid 
  const user = await UserModel.findOne({
    username: username,
    password: password
  }).exec()
  
  console.log(user)

  if (user) {
      const accesstoken = jwt.sign({
        id: user.id,
        username: username
      }, jwt_secret)
      res.json({
        user_id: user.id,
        username: username,
        accesstoken: accesstoken
      }) 
  } else {
    res.status(400).json("Username or password invalid")
  }

})

app.get('/users/:id/status/:sensor_name', verify_token, async (req, res) => {
  user_id = req.params.id
  sensor_name = req.params.sensor_name


  // Implement Authroization

  // Sensor is running if data stream data was updated in the last 30 seconds
  const status = await DataStreamModel.find(
    { user_id: user_id, 
      sensor: sensor_name, 
      timestamp: {
        $gt: new Date(new Date().getTime() - 1000 * 30 * 1)
      }
    }
  ).exec()

  if(status.length > 0) {
    res.json({"message": "Running"})
  } else {
    res.json({"message": "Stopped"})
  }
})  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})