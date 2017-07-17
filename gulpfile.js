/**
 * Created by Administrator on 2017/4/13/0013.
 */
var gulp = require('gulp'),
  px2rem = require('gulp-px3rem'),
  webpack = require('webpack-stream'),
  runSqeuence = require('run-sequence')
named = require('vinyl-named'),
  webpackConfig = require('./webpack.config.js');
gulp.task('task-css', function () {
  return gulp.src(['src/css/*.css'])
    .pipe(px2rem({ remUnit: 75 }))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('htmlCopy', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
});
gulp.task('jsCopy', function () {
  return gulp.src('src/**/*.js')
    .pipe(gulp.dest('dist'))
});
gulp.task('imagesCopy', function () {
  return gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
});
gulp.task('iconCopy', function () {
  return gulp.src('src/iconfont/*.*')
    .pipe(gulp.dest('dist/iconfont'))
});
gulp.task('assetsCopy', function () {
  runSqeuence('htmlCopy', 'jsCopy', 'imagesCopy', 'iconCopy')
})
gulp.task('watch', function () {
  gulp.watch('src/css/*.css', ['task-css']);
  gulp.watch('src/js/**/*.*', ['jsCopy']);
  gulp.watch('src/images/*.*', ['imagesCopy']);
  gulp.watch('src/iconfont/*.*', ['iconfontCopy']);
  gulp.watch('src/*.html', ['htmlCopy'])
});
gulp.task('default', ['task-css', 'watch', 'assetsCopy']);
