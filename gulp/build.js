'use strict';

let gulp = require('gulp'),
  eslint = require('eslint'),
  conf = require('./conf'),
  sourcemaps = require('gulp-sourcemaps'),
  wrench = require('wrench'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  tslint = require('gulp-tslint');


gulp.task('ts-compile', function() {

});

gulp.task('js:lint', function() {
  return gulp.src('./app/**/*.js') //replace with PATH.src
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('compress', function() {
  return gulp.src(conf.paths.distAllJSFiles)
    .pipe(uglify())
    .pipe(gulp.dest(conf.paths.deploy));
});

gulp.task('js-clean', function() {
  return del(['dist/**/*']);
});

gulp.task('build', ['js-clean', 'js-hint', 'js-compile', 'sass']);
