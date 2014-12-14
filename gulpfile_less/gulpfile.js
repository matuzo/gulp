var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
    // all less files are imported in main.less
    gulp.src('assets/styles/main.less')
    .pipe(less())
    // the task will output main.css in assets/styles
    .pipe(gulp.dest('assets/styles'))
});

gulp.task('watch', function() {
    // if a less file changes, run the less task
    gulp.watch('assets/styles/*.less', ['less']);

    // if any file in `assets` changes, reload the browser
    livereload.listen();
    gulp.watch('assets/**').on('change', livereload.changed);
});