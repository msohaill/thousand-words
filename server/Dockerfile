FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 8080

RUN npm run build
CMD ["node", "./app/src/app.js"]