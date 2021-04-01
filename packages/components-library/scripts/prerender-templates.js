const fs = require('fs');
const path = require('path');

// import prerendering functions for ASU Brand header
const Templates  = require("../dist/code.ssr");
const outputDir = path.resolve("dist", "templates");

fs.mkdirSync(outputDir, { recursive: true });

//fs.writeFileSync(path.join(outputDir, 'header.html'), Templates.HeaderTemplate);

// full example can be useful to see the static markup which would need to be injected
// into the twig template below
//fs.writeFileSync(path.join(outputDir, 'example.html'), Templates.FullExample);

const PlaceHolder = `<div id="headerContainer">${Templates.HeaderTemplate}</div>`;

// This template is used in ASU Themes.
// and can be found in AFS at /afs/asu.edu/www-dev/asuthemes/5.0/headers/component.html
// Includes a pre-rendered skeleton header which shows the logo, universal nav,
// and search bar. See the example on the /asuthemes page of our QA server, the
// source for which can be found in /server/views/asuthemes/ directory.
fs.writeFileSync(path.join(outputDir, 'component.html'), PlaceHolder);

// This template included for demo purposes only. Is not currently in any apps.
// This template includes a directive to include another nunjucks template with
// static markup. See the example in the /server/views/nav.njk for an example
// of the markup to output in the template. Can also see a demo of this in action on the
// /kitchen-sink page. The source for that page is at /server/views/kitchen-sink/
const NjkTemplate = Templates.HeaderTemplate.replace(/<div id="asu-generated-stub"><\/div>/, '{% include "nav.njk" %}');
fs.writeFileSync(path.join(outputDir, 'header.njk'), NjkTemplate);

// Not currently in use on any apps.
// Same idea as the Njk template above, but could be useful for PHP sites to
// generate a full-rendered placeholder. The advantage of having a fully rendered
// menu on the server side is that it can offer some baseline degraded functionality
// in the case that Javascript is not enabled. May have benefits for SEO also.
const TwigTemplate = Templates.HeaderTemplate.replace(/<div id="asu-generated-stub"><\/div>/, '{{ header }}');
fs.writeFileSync(path.join(outputDir, 'header.twig'), TwigTemplate);

// This template is used in ASU Themes.
// and can be found in AFS at /afs/asu.edu/www-dev/asuthemes/5.0/includes/component-footer.html
// Writes the standard footer to a static template. It's not necessary to run
// any 'render' or 'hydrate' function on the template since it doesn't require JS.
fs.writeFileSync(path.join(outputDir, 'component-footer.html'), Templates.FooterTemplate);
