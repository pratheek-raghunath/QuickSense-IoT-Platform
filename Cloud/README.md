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
```json
{
    "device_id": "507f1f77bcf86cd799439011",
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "temperature": 87,
    "humidity": 99,
    "timestamp": "2023-03-29 13:15:56.811550"
}
```

# Schema

## Users

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011")
    email: "test@test.io"
    password: "hf332332A" (Hashed)    
}
```

## Devices

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011")
    name: "Boiler"
    type: "Raspberry PI"
    user_id: ObjectId("507f1f77bcf86cd799439011")
}
```

## Data Stream

```js
{

}
```

## Alerts

Use a global consolidated alerts for all users?


## Action

```js
{

}
```

## Dashboard

```js
{
    _id: ObjectId("507f1f77bcf86cd799439011")
    user_id: ObjectId("507f1f77bcf86cd799439011")
    config: {

    }
}
```

## Status updates

Use last seen in device collection

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
