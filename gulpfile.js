const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function () {
    gulp.watch('src/less/*.less', ['less'])
});

gulp.task('default',['less','watch']);