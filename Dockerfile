FROM node:13.14-alpine 

WORKDIR /app

COPY package*.json ./

RUN yarn global add @quasar/cli

RUN yarn

COPY . .

EXPOSE 8080

CMD ["quasar", "dev", "-m", "pwa"]