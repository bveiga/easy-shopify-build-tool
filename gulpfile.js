'use strict';

const gulp 			= require('gulp');
const del 			= require('del');

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

gulp.task('default', gulp.series('clean', 'copy'));
