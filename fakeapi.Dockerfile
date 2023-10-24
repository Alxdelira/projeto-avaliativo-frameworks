FROM node:16-alpine

WORKDIR node-app/

RUN npm install -g json-server

COPY db.json .

CMD json-server --watch db.json --port 3001 --host 0.0.0.0