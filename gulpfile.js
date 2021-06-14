/* Commenting out now due to broken Jenkins build throwing errors related to "Cleaning outputDir"
const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const clean = require("gulp-clean");
const filter = require("gulp-filter");

copy = () =>
  gulp
    .src(["./server/views/**         PUT BACK WHEN UNCOMMENTED          /*"])
    .pipe(gulp.dest("./build/@asu-design-system"));

compile = () =>
  gulp
    .src("./build/@asu-design-system/**         PUT BACK WEHEN UNCOMMENTED          /*.njk")
    .pipe(nunjucks.compile())
    .pipe(filter("components-library"))
    .pipe(gulp.dest("build"));

cleanup = () =>
  gulp
    .src([
      "./build/@asu-design-system/asuheader",
      "./build/@asu-design-system/asuthemes",
      "./build/@asu-design-system/kitchen-sink",
      "./build/@asu-design-system/nav.njk",
    ])
    .pipe(clean());

exports.default = gulp.series(copy, compile, cleanup);
*/
