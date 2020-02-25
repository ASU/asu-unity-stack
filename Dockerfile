FROM node:10

# Create app directory
WORKDIR /usr/src/app

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD [ "node", "server/server.js" ]
