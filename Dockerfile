FROM node:alpine
LABEL author="Ben Lantaff"

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm install
ENTRYPOINT [ "node","server.js" ]