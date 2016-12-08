
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


gulp.task('default', function() {
   gulp.src('stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app'));
});

gulp.task('default', function() {
  gulp.src('js/**/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/'))
});

gulp.task('default', function(){
gulp.src('img/*')
     .pipe(imagemin({progressive: true, optimizationLevel: 7}))
     .pipe(gulp.dest('app/images'));
});

gulp.task('watch', function(){
gulp.watch('js/**/*.js',['default']);
});










