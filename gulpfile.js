
var gulp = require('gulp');
var sass = require('gulp-sass');
var min_css = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('sass_files/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('pre-css'));
});

gulp.task('watch', function () {
    gulp.watch('sass_files/*.scss', ['sass']);
});

gulp.task('default', function() {
    gulp.start('sass');
    gulp.start('watch');
});
gulp.task('minify-css', function () {
    return gulp.src('pre-css/AllStyles.css')
        .pipe(min_css({keepSpecialComments: 1}))
        .pipe(gulp.dest('css'))
});