# ASU Unity Stack
Arizona State University Unity StaCK(Standards Compliance Kit). This project is currently under development.

## Dependencies

In order to build the project and run the server, the dev environment needs to have the following programs installed:
- Node.js 
- NPM

## What's included

- React (https://reactjs.org/)
- Cosmos (https://github.com/react-cosmos/react-cosmos)
- Webpack (https://webpack.js.org/)
- Expressjs (https://expressjs.com/)

## Quickstart Guide

#### Local development
The easiest way to get started is to spin up react-cosmos as a dev environment:

1. ```npm install```
2. ```npm run cosmos```

See the developer documentation on react-cosmos at https://github.com/react-cosmos/react-cosmos

#### Server-side rendering with Express.js development server

1. Run ```npm start:dev```. Webpack and Node will watch for changes and automatically re-bundle assets if changes are made.
2. The prerendered asset routes will be available on port 3000. For example, the prerendered header should be accessible at:
 http://localhost:3000/header (Available routes can be found in server/server.js)

## Structure
 - src - The source code for the asu-unity-stack react components
 - webpack - Webpack configuration
 - server - Express.js server configuration
 - cosmos-export - Static export of cosmos playground. Don't use this for local dev.

