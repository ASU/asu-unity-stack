const gulp = require("gulp");
const path = require("path");
const glob = require("glob");
const nunjucks = require("gulp-nunjucks");
const clean = require("gulp-clean");
const filter = require("gulp-filter");
var fs = require('fs');
var pkg = require('./package.json');
const indexGenerator = require("./server/storybook-index-generator.js");

copy = () => gulp.src(["./server/views/**/*"]).pipe(gulp.dest("./build/@asu"));

// GH Pages needs a CNAME file at the site root, so copy the CNAME file stored
// in the /server folder.
// https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#cname-errors
cname = () => gulp.src(["./server/CNAME"]).pipe(gulp.dest("./build/"));

compile = () =>
  gulp
    .src("./build/@asu/**/*.njk")
    .pipe(nunjucks.compile())
    .pipe(gulp.dest("build"));

index = (cb) => {
  const packages = glob
    .sync(path.join(process.cwd(), "packages/", '**/package.json'), {
      ignore: '**/node_modules/**'
    })
    .map(file => JSON.parse(fs.readFileSync(file, 'utf8')));

 fs.writeFile('build/index.html', indexGenerator(packages), cb);
}

cleanup = () =>
  gulp
    .src([
      "./build/@asu/asuheader",
      "./build/@asu/gtm-datalayer",
      "./build/@asu/nav.njk",
    ])
    .pipe(clean());

exports.default = gulp.series(copy, cname, compile, index, cleanup);
