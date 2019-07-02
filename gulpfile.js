'use strict';

const gulp 			= require('gulp');
const del 			= require('del');

/*----- Clean Distribution/Production directory -----*/
gulp.task('clean', function() {
	return del(['dist/**'], {force: true});
});

gulp.task('default', gulp.series('clean'));
