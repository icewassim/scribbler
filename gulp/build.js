'use strict';

let gulp = require('gulp'),
//  eslint = require('eslint'),
  conf = require('./conf'),
  //sourcemaps = require('gulp-sourcemaps'),
  //wrench = require('wrench'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  tslint = require('gulp-tslint');


gulp.task('ts-compile', function() {
  return browserify()
  .transform("babelify", {
    presets: ["es2015"]
  })
  .require('./app/app.js', {
    entry: true
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist/'));
});

//gulp.task('eslint', function() {
//  return gulp.src('./app/**/*.js')
//    .pipe(eslint())
//    .pipe(eslint.format())
//    .pipe(eslint.failAfterError());
//});

gulp.task('compress', function() {
  return gulp.src(conf.paths.distAllJSFiles)
    .pipe(uglify())
    .pipe(gulp.dest(conf.paths.deploy));
});

gulp.task('clean', function() {
  return del(['dist/**/*']);
});

gulp.task('build', ['clean', 'compile', 'sass']);
