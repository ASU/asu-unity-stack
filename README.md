# ASU Unity Stack
Arizona State University Unity StaCK(Standards Compliance Kit). This project is currently under development.

## Getting Started

In order to build the project and run the development server, the dev environment needs to have the following programs installed:
- Node.js 
- NPM

### Building the package bundles

1. Run 'npm install' to install and build for the first time
2. To re-build the bundles after development:

```
npm run build
```

or alternatively, to have Webpack watch files and automatically rebuild

```
npm run watch:build
```

### Server side rendering with Express.js development server

1. Run 'npm start' from the project route. This will run 'webpack --watch' and 'nodemon --verbose server.js --exec babel-node' in parallel. In 
watch mode Webpack will automatically re-transpile any changes made during development, and nodemon will automatically 
re-start the Express server when server changes are made (server.js).
2. The prerendered asset routes will be available on port 3000. For example, the prerendered header should be accessible at:
 http://localhost:3000/header