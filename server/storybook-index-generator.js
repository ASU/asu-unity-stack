
const path = require("path");

const colors = ["purple", "pink", "orange", "green", "blue", "red"];

const generateRow = (package, index) => `
  <a href="${path.join(package.name, "index.html")}" class="package-row">
    <span class="title is-${colors[index % colors.length]}">
      ${package.name}
    </span>
    <span class="description">${package.description}</span>
  </a>
`;

module.exports = generateHTML = packages => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>ASU Unity QA Site</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="monorepo-index.css">
  <!-- include ASU Bootstrap 4 global styles-->
  <link href="/asu-web-standards-bootstrap4/dist/css/bootstrap-asu.min.css" rel="stylesheet" type="text/css"
  media="all">
</head>
<body>
  <div class="container">
    <div class="row>
      <div class="col">
        <div class="jumbotron">
          <h1>Welcome to Unity QA</h1>
        </div>
        <a href="/kitchen-sink"><h2>Kitchen sink page</h2></a>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img class="mx-auto d-block" src="storybook.svg" alt="Storybook" style="max-width:300px"/>
        <div class="content">
          ${packages.map(generateRow).join("")}
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;
