cd /Cloud-based-Paas-Iot-Management-Deployment/Cloud
docker-compose -f docker-compose.prod.yaml down
git pull
docker-compose -f docker-compose.prod.yaml up -d