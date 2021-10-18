const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const compression = require("compression");

const app = express();

// enable gzip compression
app.use(compression());

//configure nunjucks
nunjucks.configure(["server/views", "packages"], {
  autoescape: false,
  express: app,
  watch: true,
});

// Serve the built monorepo static Storybook app as the root of our QA site.
// Built with command 'deploy-storybook' - see tool details here: https://github.com/storybookjs/storybook-deployer
app.use(express.static("build"));

// configure packages directory to serve built files
app.use(express.static("packages"));

/*****
 * Kitchen sink page
 * Serve HTML page which tests bundled packages
 */
app.get("/kitchen-sink", function (req, res) {
  // Important: This index.njs is a nunjucks template and resides in 'server/views'.
  // Not to be confused with the root index.html in the static Storybook 'build' directory.
  res.render("kitchen-sink/index.njk");
});

/***
 * Asuthemes header includes example
 */
app.get("/asuthemes", function (req, res) {
  // Important: This index.njs is a nunjucks template and resides in 'server/views'.
  // Not to be confused with the root index.html in the static Storybook 'build' directory.
  res.render("asuthemes/index.njk");
});

/***
 * Asuheader guide
 */
app.get("/asuheader", function (req, res) {
  // Important: This index.njs is a nunjucks template and resides in 'server/views'.
  // Not to be confused with the root index.html in the static Storybook 'build' directory.
  res.render("asuheader/index.njk");
});

// Listen for stop command with socket.io. Referenced from stackoverflow answer:
// https://stackoverflow.com/questions/23258421/how-to-stop-app-that-node-js-express-npm-start/39128820
const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(3000);

io.on("connection", socketServer => {
  socketServer.on("npmStop", () => {
    process.exit(0);
  });
});