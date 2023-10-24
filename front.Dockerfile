FROM node:16-alpine

WORKDIR node-app/

COPY . .
RUN npm install

CMD npm run dev