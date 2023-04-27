FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "dev","--","--host","0.0.0.0"]