const compression = require("compression");
const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

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

/***
 * Asuheader guide
 */
app.get("/asuheader", function (req, res) {
  // Important: This index.njs is a nunjucks template and resides in 'server/views'.
  // Not to be confused with the root index.html in the static Storybook 'build' directory.
  res.render("asuheader/index.njk");
});

/***
 * gtm-datalayer guide
 */
app.get("/gtm-datalayer", function (req, res) {
  // Important: This index.njs is a nunjucks template and resides in 'server/views'.
  // Not to be confused with the root index.html in the static Storybook 'build' directory.
  res.render("gtm-datalayer/index.njk");
});

// Listen for stop command with socket.io. Referenced from stackoverflow answer:
// https://stackoverflow.com/questions/23258421/how-to-stop-app-that-node-js-express-npm-start/39128820
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

server.listen(PORT, () => {
  console.log("\nServer Details:");
  console.log("------------------------------------");
  console.log("| Server is running on port  |", PORT, " |");
  console.log("| Access the application at  |", URL, " |");
  console.log("------------------------------------");
});

io.on("connection", socketServer => {
  socketServer.on("npmStop", () => {
    process.exit(0);
  });
});
