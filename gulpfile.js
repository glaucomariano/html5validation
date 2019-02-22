'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var csso = require('gulp-csso');

// Run SASS
gulp.task('sass', gulp.series( function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
}));

// Minify CSS
gulp.task('cssmin', gulp.series( function () {
    return gulp.src('./css/style.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(csso())
        .pipe(gulp.dest('./css'));
}));

// Watch for SCSS changes and run SASS
gulp.task('watch', gulp.series( function() {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
}));