var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var config = {
  stylus: "./src/styles/*.styl",
  html: "./*.html",
  dist: "./"
};

gulp.task('stylus', function () {
  return gulp.src(config.stylus)
    .pipe(stylus())
    .pipe(gulp.dest(config.dist))
    .pipe(browserSync.stream());
});

gulp.task('default', function () {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(config.stylus, gulp.series('stylus'));
  gulp.watch(config.html).on('change', browserSync.reload);
});