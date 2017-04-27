'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('imagemin', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});
