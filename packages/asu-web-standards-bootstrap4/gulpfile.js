// Defining requirements
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const babel = require('gulp-babel');
// const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('autoprefixer');

// Configuration file to keep code DRY
const cfg = require('./gulpconfig.json');
const paths = cfg.paths;

// Run:
// gulp sass
// Compiles SCSS files into CSS
gulp.task('sass', function() {
	const stream = gulp
		.src(paths.sass + '/bootstrap-asu.scss')
		.pipe(
			plumber({
				errorHandler: function(err) {
					console.log(err);
					this.emit('end');
				}
			})
		)
		// .pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sass({ outputStyle: 'expanded', errLogToConsole: true }))
		// .pipe(postcss([autoprefixer()]))
		// .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.css));
	return stream;
});

// Run:
// gulp eslint
gulp.task('eslint', function () {
  return gulp.src(`${paths.js}/*.js`)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Run:
// gulp sasslint
// Lint SCSS files
gulp.task('sasslint', function() {
	const stream = gulp
		.src(paths.sass + '/**/*.scss')
		.pipe(
			plumber({
				errorHandler: function(err) {
					console.log(err);
					this.emit('end');
				}
			})
		)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
	return stream;
});

// Run:
// gulp imagemin
// Running image optimizing task
gulp.task('imagemin', function() {
	return gulp
		.src(`${paths.imgsrc}/**`)
		.pipe(imagemin())
		.pipe(gulp.dest(paths.img));
});

gulp.task('minifycss', function() {
	return gulp
		.src(`${paths.css}/bootstrap-asu.css`)
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(cleanCSS({ compatibility: '*' }))
		.pipe(
			plumber({
				errorHandler: function(err) {
					console.log(err);
					this.emit('end');
				}
			})
		)
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.css));
});

gulp.task('styles', function(callback) {
	gulp.series('sass', 'minifycss')(callback);
});

// Run:
// gulp scripts.
// Uglifies and concat all JS files into one
gulp.task('scripts', function() {
	const scripts = [
    'src/js/_license.js',
    'node_modules/fastclick/lib/fastclick.js',
    'src/js/_fastclick.js',
    'node_modules/smooth-scroll/dist/js/smooth-scroll.js',
    'src/js/_smoothscroll.js'
	];
	gulp
		.src(scripts, { allowEmpty: true })
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(babel())
		.pipe(concat('bootstrap-asu.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dist + '/js'));

	return gulp
		.src(scripts, { allowEmpty: true })
		.pipe(babel())
		.pipe(concat('bootstrap-asu.js'))
		.pipe(gulp.dest(paths.dist + '/js'));
});

// Deleting any file inside the /src folder
gulp.task('clean-source', function() {
	return del(['src/**/*']);
});

// Copy all assets needed for ASU Web Standards
gulp.task('copy-assets', function(done) {
	// Copy Font Awesome Fonts
	gulp
		.src(`${paths.node}font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}`)
		.pipe(gulp.dest('./dist/fonts'));

	done();
});

// Deleting any file inside the /dist folder
gulp.task('clean-dist', function() {
	return del([paths.dist + '/**']);
});

// Run
// gulp compile
// Compiles the styles, scripts, and assets into the dist folder
gulp.task('compile', gulp.series('styles', 'scripts', 'imagemin', 'copy-assets'));

// Run
// gulp validate
// Lint and validate the styles and scripts
gulp.task('validate', gulp.series('eslint', 'sasslint'));

// Run:
// gulp
// Starts watcher (default task)
gulp.task('default', gulp.series('watch'));
