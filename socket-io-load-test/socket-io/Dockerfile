FROM node:12.13.1-alpine3.9
# FROM maven:3.5.4-jdk-8-slim

EXPOSE 9090

WORKDIR /usr/src/socketio

ADD src src
ADD babel.config.js babel.config.js
ADD webpack.config.js webpack.config.js
ADD package.json package.json

RUN npm install

RUN npm run-script build
CMD node ${NODE_OPTIONS} build/bundle.js
