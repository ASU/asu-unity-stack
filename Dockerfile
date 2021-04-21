FROM node:12

ARG NPM_TOKEN

# Create app directory
WORKDIR /usr/src/app

# If you are building your code for production
# RUN npm ci --only=production

# Copy app
COPY . .

RUN echo "@asu-design-system:registry=https://registry.web.asu.edu/" > ~/.npmrc
RUN echo "//registry.web.asu.edu/:_authToken=${NPM_TOKEN}" >> ~/.npmrc
RUN yarn install
RUN yarn build
RUN yarn build-storybook

EXPOSE 3000
CMD [ "node", "server/server.js" ]
