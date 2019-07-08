'use strict';

const gulp 			= require('gulp');
const del 			= require('del');
const sass 			= require('gulp-sass');

/*----- Clean Distribution/Production directory -----*/
gulp.task('clean', function() {
	return del(['dist/**'], {force: true});
});

/*----- Copy Liquid Files -----*/
gulp.task('copy', function() {
	return gulp.src([
		'./src/assets/*',
		'./src/config/settings_schema.json',
		'./src/layout/*',
		'./src/locales/*',
		'./src/sections/*',
		'./src/snippets/*',
		'./src/templates/**/*'
	], {base: './src/'})
	.pipe(gulp.dest('./dist/'));
});

/*----- Build Sass -----*/
gulp.task('styles', function() {
	return gulp.src('src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/assets/'));
});

gulp.task('build', gulp.series('clean', 'copy', 'styles'));
