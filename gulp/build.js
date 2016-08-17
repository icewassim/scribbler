'use strict';

const gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  conf = require('./conf'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');


gulp.task('compile', function() {
  return browserify()
  .transform("babelify", {
    presets: ["es2015"]
  })
  .require('./app/js/app.js', {
    entry: true
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('eslint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('compress', function() {
  return gulp.src(conf.paths.distAllJSFiles)
    .pipe(uglify())
    .pipe(gulp.dest(conf.paths.deploy));
});

gulp.task('clean', function() {
  return del(['dist/**/*']);
});

gulp.task('build', ['eslint', 'clean', 'compile', 'sass']);
