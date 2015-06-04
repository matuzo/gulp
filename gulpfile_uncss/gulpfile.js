var gulp = require('gulp'),
	uncss = require('gulp-uncss');

var pathToProject = 'http://localhost/myproject';

gulp.task('uncss', function() {
    return gulp.src('dev/*.css')
        .pipe(uncss({
            html: ['*.html', pathToProject],
            ignore: ['h1', /^.js-/]
        }))
        .pipe(gulp.dest('dist'));
});