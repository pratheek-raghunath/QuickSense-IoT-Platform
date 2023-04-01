Components:
- MQTT broker
- Worker Node
- REST API
- MongoDB
- Websocket server

Deployment - GCP using terraform

# Cloud deployment

## Urgent things:
- Create GCP project and add everyone as collaborators 
- connect a domain name
- test exposing multiple ports to docker containers
- deploy a basic backend and demo Max's graph to prepare for the demo

## Deployment Steps:
- Run terraform file whch will create a GCP compute engine instance and will run a startup script
- Startup script:
    - clone the repo in the instance (Haven't tested cloning private repo)
    - Install docker and docker compose (Not tested)
    - Check if there backup of db is present, if it is present download it (Not tested)
    - Start all the services using docker-compose
    - Pointing the domain name to the machine (Not tested)
    - Make the broker, API and the websocket server publicly accessible (Not tested) - https://stackoverflow.com/questions/40595769/how-to-point-multiple-domain-names-to-one-compute-engine-in-google-cloud
        - broker.domainname.com 
        - api.domainname.com
        - wss.domainname.com
- Execute a shutdown script when the instance is shut down:
    - Dump the mongo db to a cloud storage bucket (not tested)


# Data from device

Data Stream:

```json
{
    "device_id": "507f1f77bcf86cd799439011",
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "temperature": 87,
    "humidity": 99,
    "timestamp": "2023-03-29 13:15:56.811550"
}
```

Alert 

```json
{
    "device_id": "507f1f77bcf86cd799439011",
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "message": "Gas leakage detected",
}
```

Issues:
- How will a device send both a data stream and an alert (need to use threads or python async)
- According to my current implementation, a device that only sends an alert will not be be able to send status updates

# Schema

## Platform Questions
- Is the dashboard going to be hardcoded or configurable by the user
- Is the data stream going to be configurable (specify schema or hardcode based on our use case)
- Is the alerts going to be configurable
- Is the actions going to be configurable

## DB 
MongoDB using mongoose as ODM

## Users Collection

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011"),
    email: "test@test.io",
    password: "hf332332A" (Hashed)    
}
```

## Devices

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011"),
    name: "Boiler",
    type: "Raspberry PI",
    photo: (either cloud storage url or store image in mongo),
    user_id: ObjectId("507f1f77bcf86cd799439011")
}
```

## Data Stream collection

Use a consolidated alerts data streams collection for all users?

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011"),
    data: {
        temperature: 50,
        humidity: 99
    }
    device_id: ObjectId("507f1f77bcf86cd799439011"),
    user_id: ObjectId("507f1f77bcf86cd799439011"),
    timestamp: "2023-03-29 13:15:56.811550"
}
```

## Alerts collection

Use a consolidated alerts collection for all users?

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011"),
    message: "Gas leakage",
    device_id: ObjectId("507f1f77bcf86cd799439011"),
    user_id: ObjectId("507f1f77bcf86cd799439011"),
    timestamp: "2023-03-29 13:15:56.811550"
}
```

## Action

Doesn't require a collection ig if we are hardcoding 

## Dashboard

Will require configuration only if we are not hardcoding

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011")
    user_id: ObjectId("507f1f77bcf86cd799439011")
    config: {

    }
}
```

# API endpoints

## users

- GET /users - Return all users
- GET /users/:id - Return single user details
- POST /users - Create new user
- PUT /users/:id - Update user details

## authentication

- POST /auth/login - Check if user details are valid and return access token to frontend
- POST /auth/device-token - Generate JWT token for device
- POST /auth/device-verify - Check if JWT token is valid

## devices
- GET /devices - Return all devices (filter by user)
- GET /devices/:id - Return single device details
- POST /devices - Create new device
- PUT /devices/:id - Update device details
- GET /devices/:id/is_active - Check if device has sent data recently

## alerts 
- GET /alerts - Return all alerts for a user

## data streams

Assuming hardcoding

- GET /data_streams/:id - Return the latest data from a device if available

# Realtime Visualization

- Have some ideas but need to test it 
- Need to reduce the complexity of the realtime part
- According to the current design our platform has four realtime pieces: status updates, dashboard, alerts, actions

## Status Updates

To reduce complexity, in the rest api implement an endpoint GET /devices/:id/is_active which will return true if the device has sent data recently in the data streams or alerts topic

## Dashboard and Alerts

Have a very very juggaad solution for sending Dashboard and alerts data in realtime

Code for frontend to connect with websocket server
```js
io.on("connection", (socket) => {
    console.log(socket.id);
    socket_id = socket.id
    socket.emit("hello", "world");

    
});
```

We could register 


## Actions

# Cloud Deployment Notes

[GCP Deploy Flask](https://cloud.google.com/docs/terraform/get-started-with-terraform)

[GCP Free Tier Compute Engine with docker and docker-compose](https://github.com/Joeharrison94/terraform-gcp-ubuntu-container-ready-e2-micro-vm)

## Fix the compute engine setup

- reserved ip address
- ports - 22, 1883, 27017, 80, 443 (be careful about mongo, add username and pass)
- docker, docker-compose install
- clone private repo

## Update setup

- pull latest repo
- restart containers

## gcloud 

```sh
gcloud init
gcloud auth application-default login
```

## Terraform

```sh
#Initialize terraform
terraform init

#Build Infrastructure
terraform apply

#Destroy Infrastrucutre
terraform destroy
```

## Reserving IP address

IP Address - 34.122.170.116

```sh
gcloud compute addresses create cloud-based-iot-deployment  \
    --region=us-central1

gcloud compute addresses describe cloud-based-iot-deployment --region=us-central1
```

## ssh

```sh
gcloud compute ssh --zone "us-central1-c" "cloud-based-iot-deployment"  --project "cloud-based-iot-deployment"
```

### http server for testing

```sh
sudo apt update && sudo apt -y install apache2
sudo systemctl status apache2
echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | sudo tee /var/www/html/index.html
```

### Name.com DNS config

www - A record
rest all subdomains cname to www

dns lookup check - https://www.whatsmydns.net/

### Broker testing

mosquitto_pub -h broker.orensaldanha.live -t 'test/topic' -m 'helloWorld'
mosquitto_sub -h broker.orensaldanha.live -t '/temp'

### nginx setup
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04

### gcp ssh

```sh
gcloud compute ssh --zone "us-central1-c" "cloud-based-iot-deployment"  --project "cloud-based-iot-deployment"
```

