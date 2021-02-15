FROM node:12-alpine

# Create app directory
WORKDIR /app
ADD . /app/

# global install & update
RUN npm install

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "npm", "dev" ]
