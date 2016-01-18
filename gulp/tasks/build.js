var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var yaml = require('gulp-yaml');

// Builds SASS-based styles in the destination directory, keeping the source directory structure
gulp.task('build-styles', function () {
    return gulp.src(paths.sass, {base: paths.root})
        .pipe(sass({
            includePaths: paths.sassIncludes
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.output));
});

// Copies unmodified assets to the destination directory, keeping the source directory structure
gulp.task('copy-assets', function () {
    return gulp.src(paths.assets)
        //.pipe(changed(paths.output))
        .pipe(gulp.dest(paths.output));
});

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
    return gulp.src(paths.source)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(to5(assign({}, compilerOptions, {modules: 'system'})))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-yaml', function () {
    return gulp.src(paths.yaml)
        .pipe(yaml({space: 4}))
        .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        [ 'build-system', 'build-styles', 'copy-assets' ],
        callback
    );
});
