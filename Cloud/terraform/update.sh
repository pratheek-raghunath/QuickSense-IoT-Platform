cd /Cloud-based-Paas-Iot-Management-Deployment/Cloud
sudo docker-compose -f docker-compose.prod.yaml down
sudo git pull
sudo cp package.json worker.js schema.js worker
sudo cp package.json wss.js schema.js wss
sudo cp package.json api.js schema.js api
sudo docker-compose -f docker-compose.prod.yaml build --no-cache
sudo docker-compose -f docker-compose.prod.yaml up -d --force-recreate
