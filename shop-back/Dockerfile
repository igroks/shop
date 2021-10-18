FROM node:14-alpine

WORKDIR /app

COPY package.json .

COPY . /app

RUN npm install

RUN npm install -g nodemon
