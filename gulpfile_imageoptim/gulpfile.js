var gulp = require('gulp'),
    imageOptim = require('gulp-imageoptim');
 
gulp.task('imgopt', function() {
    return gulp.src('dev/images/**/*')
        .pipe(imageOptim.optimize())
        .pipe(gulp.dest('dist/images'));
});