FROM node:12

# private registry packages and Docker: 
# https://docs.npmjs.com/docker-and-private-modules
ARG NPM_TOKEN
COPY .npmrc .npmrc
COPY package.json package.json

# Create app directory
WORKDIR /usr/src/app

# If you are building your code for production
# RUN npm ci --only=production

# Copy app
COPY . .

RUN yarn install
RUN rm -f .npmrc
#RUN echo "//registry.web.asu.edu/:_authToken=${NPM_TOKEN}" >> ~/.npmrc
RUN yarn build
RUN yarn build-storybook

EXPOSE 3000
CMD [ "node", "server/server.js" ]
