var gulp = require('gulp'),
    jslint = require('gulp-jslint'),
    csslint = require('gulp-csslint'),
    htmlhint = require("gulp-htmlhint");

// Javascript lint
// For more options see https://www.npmjs.org/package/gulp-jslint/ and http://www.jslint.com/lint.html
gulp.task('checkjs', function () {
    return gulp.src('assets/scripts/*.js')
            .pipe(jslint())
});

// CSS lint
// For more options see https://www.npmjs.org/package/gulp-csslint
gulp.task('checkcss', function() {
  gulp.src('assets/styles/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

// HTML hint
// For more options see https://www.npmjs.org/package/gulp-htmlhint
gulp.task('checkhtml', function() {
    gulp.src("*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
});

gulp.task('default', ['checkhtml', 'checkcss', 'checkjs']);


