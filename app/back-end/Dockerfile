FROM node:12

WORKDIR /usr/src/app/back-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["node", "server.js"]