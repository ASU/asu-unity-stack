FROM node:12

# Obtain credential from Jenkins environ.
ARG NPM_TOKEN

# Create app directory
WORKDIR /usr/src/app

# If you are building your code for production
# RUN npm ci --only=production

# Copy app
COPY . .

# Copy private NPM auth token into place.
RUN echo "//registry.web.asu.edu/:_authToken=${NPM_TOKEN}" >> ~/.npmrc

RUN yarn install
RUN yarn build
RUN yarn build-storybook

EXPOSE 3000
CMD [ "node", "server/server.js" ]
