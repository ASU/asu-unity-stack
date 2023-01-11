const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const clean = require("gulp-clean");
const filter = require("gulp-filter");

copy = () =>
  gulp
    .src(["./server/views/**/*"])
    .pipe(gulp.dest("./build/@asu"));

compile = () =>
  gulp
    .src("./build/@asu/**/*.njk")
    .pipe(nunjucks.compile())
    // Commented out next line for Jenkins build. Breaks static build.
    // Uncomment with cutover to GitHub Actions build. UDS-634
    //.pipe(filter("components-library"))
    .pipe(gulp.dest("build"));

cleanup = () =>
  gulp
    .src([
      "./build/@asu/asuheader",
      "./build/@asu/asuthemes",
      "./build/@asu/nav.njk",
    ])
    .pipe(clean());

exports.default = gulp.series(copy, compile, cleanup);
