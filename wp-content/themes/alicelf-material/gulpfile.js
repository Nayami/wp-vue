// i --save-dev gulp gulp-concat gulp-rename gulp-uglify gulp-sourcemaps
// rimraf node_modules

var gulp = require('gulp'),
		aa_concat = require('gulp-concat'),
		aa_rename = require('gulp-rename'),
		aa_uglify = require('gulp-uglify'),
		aa_sourcemaps = require('gulp-sourcemaps');

var devRoot = "script/dev/", prodRoot = "script/prod/";
var processFiles = [
	devRoot + 'startVue.js',
	devRoot + 'vuex/**/*.js',        // data
	devRoot + 'components/**/*.js',        // Regular Components
	devRoot + 'routes/components/**/*.js', // Router layouts
	devRoot + 'routes/routes.js',
	devRoot + 'bootstrapVue.js',

	devRoot + 'script.js'
];
// ================== Main working scope ==================
gulp.task('aa-concat', function() {
	return gulp.src(processFiles)
		.pipe(aa_sourcemaps.init())
		.pipe(aa_concat('concat.js'))
		.pipe(gulp.dest(devRoot))
		.pipe(aa_rename('app-uglify.js'))
		.pipe(aa_uglify())
		.pipe(aa_sourcemaps.write('./'))
		.pipe(gulp.dest(prodRoot));
});

gulp.task('watch', function() {
	gulp.watch(processFiles, ['aa-concat']);
});

gulp.task('default', ['aa-concat'], function() {
});