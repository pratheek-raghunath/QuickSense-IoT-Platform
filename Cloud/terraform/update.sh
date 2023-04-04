cd /Cloud-based-Paas-Iot-Management-Deployment/Cloud
sudo docker-compose -f docker-compose.prod.yaml down
sudo git pull
sudo docker-compose -f docker-compose.prod.yaml up -d
