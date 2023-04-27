sudo apt-get update -y

#Install docker and docker-compose
# Install Docker
sudo apt install apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release -y
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg --batch --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update -y
sudo apt install docker-ce nano -y

sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -L https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-`uname -s`-`uname -m` -o /bin/docker-compose
sudo chmod +x /bin/docker-compose\

#Clone repo
#git clone https://orensaldanha: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@github.com/orensaldanha/cloud-temp
#sudo git clone https://pratheek-raghunath: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@github.com/pratheek-raghunath/Cloud-based-Paas-Iot-Management-Deployment
sudo git clone https://pratheek-raghunath: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@github.com/pratheek-raghunath/Cloud-based-Paas-Iot-Management-Deployment
sudo git config --global --add safe.directory /Cloud-based-Paas-Iot-Management-Deployment

#Install and setup nginx
sudo apt install nginx -y
sudo ufw allow 'Nginx HTTP'
sudo mv /Cloud-based-Paas-Iot-Management-Deployment/Cloud/terraform/orensaldanha.live /etc/nginx/sites-enabled/orensaldanha.live
sudo mv /Cloud-based-Paas-Iot-Management-Deployment/Cloud/terraform/quicksense.live /etc/nginx/sites-enabled/quicksense.live
sudo systemctl restart nginx 

#Install pip
sudo apt install python3-pip -y

# Install nodejs
sudo mkdir /opt/nodejs
sudo curl https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.gz | sudo tar xvzf - -C /opt/nodejs --strip-components=1
sudo ln -s /opt/nodejs/bin/node /usr/bin/node
sudo ln -s /opt/nodejs/bin/npm /usr/bin/npm

cd /Cloud-based-Paas-Iot-Management-Deployment/Cloud
sudo npm install

#Prepare docker containers
sudo cp package.json worker.js schema.js worker
sudo cp package.json wss.js schema.js wss
sudo cp package.json api.js schema.js api
sudo cp -r ../GUI/cloudpaas/. web-gui/

sudo docker-compose -f docker-compose.prod.yaml up -d

#Copy update script to root
sudo cp /Cloud-based-Paas-Iot-Management-Deployment/Cloud/terraform/update.sh /update.sh
sudo chmod a+x /update.sh