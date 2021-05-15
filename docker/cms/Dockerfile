FROM node:12
RUN mkdir -p /app
WORKDIR /app
COPY ./cms/package.json ./
COPY ./cms/yarn.lock ./
RUN yarn install
COPY ./cms .
CMD [ "yarn", "develop" ]