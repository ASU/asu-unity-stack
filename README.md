# ASU Unity Stack
Arizona State University Unity StaCK(Standards Compliance Kit). This project is currently under development.

## Dependencies

In order to build the project and run the server, the dev environment needs to have the following programs installed:
- Node.js 
- NPM

## What's included

- React (https://reactjs.org/)
- Storybook (https://storybook.js.org/)
- Webpack (https://webpack.js.org/)
- Expressjs (https://expressjs.com/)

## Quickstart Guide

#### Local development
The easiest way to get started is to spin up react-cosmos as a dev environment:

1. ```npm install```
2. ```npm run storybook```

See the developer documentation on storybook at https://storybook.js.org/docs/basics/introduction/

#### Server-side rendering example with Express.js development server

1. Run ```npm start:dev```. Webpack and Node will watch for changes and automatically re-bundle assets if changes are made.
2. The prerendered asset routes will be available on port 3000. For example, the prerendered header should be accessible at:
 http://localhost:3000/header (Available routes can be found in server/server.js)

## Structure
 - src - The source code for the asu-unity-stack react components
 - webpack - Webpack configuration
 - server - Express.js server configuration

## Building, Testing and Deployment

```npm run build``` - build the project

```npm run test``` - run Jest tests

A component playground is currently deployed at http://unity-balance-f2e2852aae9ea285.elb.us-west-2.amazonaws.com:3000  

