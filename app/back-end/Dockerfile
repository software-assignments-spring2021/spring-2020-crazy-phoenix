FROM node:12

WORKDIR /usr/src/app/deploy_back-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["node", "server.js"]