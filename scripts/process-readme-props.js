const fs = require("fs");
const path = require("path");

const packages = [
  "app-degree-pages",
  "component-carousel",
  "component-events",
  "component-footer",
  "component-header",
  "component-news",
  "components-core",
  "components-library",
];

const processFile = docPath => {
  fs.readFile(docPath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    const result = data.replace(/## Functions/, "## Components");

    fs.writeFile(docPath, result, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
};

packages.forEach(packageName => {
  const docPath = path.join(
    __dirname,
    `../packages/${packageName}/docs/README.props.md`
  );

  fs.exists(docPath, exists => (exists ? processFile(docPath) : null));
});
