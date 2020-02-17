const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");

// import prerendering functions for ASU Brand header
const brandRender = require("../packages/asu-brand/dist/asu-brand.ssr");

const app = express();

//configure nunjucks
nunjucks.configure("server/views", {
  autoescape: false,
  express: app,
  watch: true
});

// configure packages directory to serve static files (bundles)
app.use(express.static('packages'));

/*****
 * Kitchen sink page
 * Serve HTML page which tests bundled packages
 */
app.get("/", function(req, res) {
  // todo: add not found message
  res.render("index.html", {
    // include the pre-rendered header in the template
    header: brandRender.renderedHeader
  });
});

// Server side rendering of ASU Header
app.get("/header", brandRender.sendASUHeader);

// Server side rendering of ASU Footer
//app.get('/footer', sendASUFooter);

// Start server
//app.listen(3000);

const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000);

// Listen for stop command with socket.io. Referenced from stackoverflow answer:
// https://stackoverflow.com/questions/23258421/how-to-stop-app-that-node-js-express-npm-start/39128820
io.on('connection', (socketServer) => {
  socketServer.on('npmStop', () => {
    process.exit(0);
  });
});
