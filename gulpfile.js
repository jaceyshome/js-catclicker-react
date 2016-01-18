<<<<<<< HEAD
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('scripts', function()
{
    gulp.src(['app/main.js'])
        .pipe(browserify(
        {
            debug: false,
            transform: ['reactify']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'))
});

gulp.task('compress', function()
{
    return gulp.src('public/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);

