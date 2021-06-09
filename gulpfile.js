const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");

copy = () =>
  gulp
    .src(["./server/views/**/*"])
    .pipe(gulp.dest("./build/@asu-design-system"));

compile = () =>
  gulp
    .src("./build/@asu-design-system/**/*.njk")
    .pipe(nunjucks.compile())
    .pipe(gulp.dest("build"));

exports.default = gulp.series(copy, compile);
