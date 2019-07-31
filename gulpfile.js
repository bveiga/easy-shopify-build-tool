'use strict';

const gulp 			= require('gulp');
const del 			= require('del');
const sass 			= require('gulp-sass');
const include			= require('gulp-include');

/*----- Clean Distribution directory -----*/
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

/*----- Concat Js -----*/
gulp.task('scripts', function() {
	return gulp.src('./src/scripts/*.js')
    		.pipe(include())
		.on('error', console.log)
		.pipe(gulp.dest('./dist/assets/'));
});

gulp.task('default', gulp.series('clean', 'copy', 'styles', 'scripts'));
