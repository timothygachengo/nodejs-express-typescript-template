FROM ubuntu:20.04
# FROM node:16-alpine3.14

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common \
    nodejs \
    yarnpkg \
    && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

WORKDIR /app

COPY package.json /app

RUN npm install yarn

RUN yarn install

COPY . /app/

RUN yarn build

EXPOSE 6900

CMD ["yarn", "start"]

