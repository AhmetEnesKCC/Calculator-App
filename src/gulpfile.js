
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./SCSS/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./CSS'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./SCSS/**/*.scss', gulp.series("sass"));
});