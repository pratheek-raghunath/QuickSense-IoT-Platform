const { UserModel } = require("./schema")
const morgan = require('morgan');

const express = require('express')
const app = express()
const port = 3002


//middleware
app.use(morgan('tiny'))
app.use(express.json())


//user routes
app.get('/users', async (req, res) => {
  users = await UserModel.find().exec()
  console.log(users)
  res.json(users)
})

app.post('/users', async (req, res) => {
  user = req.body
  console.log(req.body)
  user_instance = new UserModel(user)
  user_instance.save((err) => {
      if (err)
          console.log(err);
  });
  console.log("User created successfully")
  res.status(201).json({"message": "User created successfully"})
})

app.get('/users/:id', async (req, res) => {
  user_id = req.params.id
  console.log(`user_id: ${user_id}`)
  user = await UserModel.findById(user_id).exec()
  if (!user) {
    res.status(404).send({"error": "User not found"})
  } else {
    res.json(user)
  }
})

app.put('/users/:id/add_sensor', async (req, res) => {
  user_id = req.params.id
  sensor = req.body.sensor

  user = await UserModel.findById(user_id).exec()
  if (!user) {
    res.status(404).send({"error": "User not found"})
  } 

  console.log(user)
  console.log(req.sensor)
  console.log(user_id)

  if(!user.sensors.includes(sensor)) {
    await UserModel.findOneAndUpdate({_id: user_id}, {sensors: user.sensors.concat(sensor)})
  }

  res.status(200).json({"message": "Sensor added successfully"})
})

app.put('/users/:id/remove_sensor', async (req, res) => {
  user_id = req.params.id
  sensor = req.body.sensor

  user = await UserModel.findById(user_id).exec()
  if (!user) {
    res.status(404).send({"error": "User not found"})
  } 

  console.log(user)
  console.log(req.sensor)
  console.log(user_id)

  if(user.sensors.includes(sensor)) {
    await UserModel.findOneAndUpdate({_id: user_id}, {sensors: user.sensors.filter((value, index, arr) => {return value != sensor})})
  }

  res.status(200).json({"message": "Sensor removed successfully"})
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})