const fs = require('fs');
const path = require('path');

// import prerendering functions for ASU Brand header
const Templates  = require("../dist/web-components.ssr");
const outputDir = path.resolve("dist", "templates");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'header.html'), Templates.HeaderTemplate);

fs.writeFileSync(path.join(outputDir, 'example.html'), Templates.FullExample);

const NjkTemplate = Templates.HeaderTemplate.replace(/<div id="asu-generated-stub"><\/div>/, '{% include "nav.njk" %}');

fs.writeFileSync(path.join(outputDir, 'header.njk'), NjkTemplate);

const TwigTemplate = Templates.HeaderTemplate.replace(/<div id="asu-generated-stub"><\/div>/, '{{ header }}');


fs.writeFileSync(path.join(outputDir, 'header.twig'), TwigTemplate);
