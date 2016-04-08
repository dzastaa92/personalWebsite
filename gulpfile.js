
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('sass_files/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('sass_files/*.scss', ['sass']);
});

gulp.task('default', function() {
    gulp.start('sass');
    gulp.start('watch');
});