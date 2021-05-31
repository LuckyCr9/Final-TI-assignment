FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

FROM mhart/alpine-node:10 as env
ARG SERVER_ENV

WORKDIR /usr/src/app
COPY aws.js /usr/src
RUN yarn add aws-sdk
COPY . .
RUN node aws ${SERVER_ENV}

FROM mhart/alpine-node:10 as base
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/
RUN yarn install
COPY . .
COPY --from=env /usr/src .
RUN yarn build


FROM mhart/alpine-node:10
WORKDIR /usr/src/app
COPY --from=base /usr/src .