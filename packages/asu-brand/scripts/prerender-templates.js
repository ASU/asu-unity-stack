const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

// import prerendering functions for ASU Brand header
const brandRender = require("../dist/asu-brand.ssr");
const outputDir = path.resolve("dist", "templates");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'header.html'), brandRender.renderedHeader);
