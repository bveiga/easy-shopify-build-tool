'use strict';

const del 			= require('del');
const dotenv        = require('dotenv').config(); /* require .env variables */
const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const include		= require('gulp-include');
const shopify       = require('gulp-shopify-upload-with-callbacks');
const watch         = require('gulp-watch');

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
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/assets/'));
});

/*----- Concat Js -----*/
gulp.task('scripts', function() {
	return gulp.src('./src/scripts/*.js')
    	.pipe(include())
      		.on('error', console.log)
		.pipe(gulp.dest('./dist/assets/'));
});

/*----- Watch & Auto Build -----*/
gulp.task('watch', function() {
	gulp.watch('./src/styles/**/*.scss', gulp.series('styles'));
	gulp.watch('./src/scripts/**/*.js', gulp.series('scripts'));
	gulp.watch([
		'./src/assets/*',
		'./src/config/settings_schema.json',
		'./src/layout/*',
		'./src/locales/*',
		'./src/sections/*',
		'./src/snippets/*',
		'./src/templates/**/*'
	], gulp.series('copy'));
});

/*----- Deploy Theme -----*/
gulp.task('deploy', function() {
	if (!process.env.THEME_ID) {
		return false;
	} else {
		return gulp.src('./dist/+(assets|config|layout|locales|sections|snippets|templates)/**')
			.pipe(shopify(process.env.API_KEY, process.env.API_PASSWORD, process.env.STORE_URL, process.env.THEME_ID, {basePath: 'dist/'}))
	}
});

gulp.task('build', gulp.series('clean', 'copy', 'styles', 'scripts'));
