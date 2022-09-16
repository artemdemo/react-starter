FROM node:dubnium-alpine

# I need it for my eslint rules package that I'm using from git
RUN apk update && apk add --no-cache git

ENV NODE_ENV=production

COPY ./package*.json ./app/

WORKDIR '/app'
RUN yarn install
COPY . .
RUN yarn run build

WORKDIR '/app/server'
RUN yarn install

ENV PORT=8080
EXPOSE $PORT

CMD ["yarn", "run", "start"]
