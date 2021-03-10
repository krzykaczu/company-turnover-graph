FROM node:12
RUN mkdir -p /app
WORKDIR /app
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn install
COPY ./frontend .
CMD [ "yarn", "dev" ]