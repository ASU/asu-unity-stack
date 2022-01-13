FROM node:12

# Override node version set in buildkite/puppeteer:5.2.1
ENV NODE_VERSION=12.22.1

ARG NPM_TOKEN

# Create app directory
WORKDIR /usr/src/app

# If you are building your code for production
# RUN npm ci --only=production

# Copy app
COPY . .

RUN echo "registry=https://registry.web.asu.edu/" > ~/.npmrc
RUN echo "always-auth=true" >> ~/.npmrc
RUN echo "//registry.web.asu.edu/:_authToken=${NPM_TOKEN}" >> ~/.npmrc
RUN yarn install
RUN yarn build
RUN yarn build-storybook
RUN yarn gulp

EXPOSE 3000
CMD [ "node", "server/server.js" ]
