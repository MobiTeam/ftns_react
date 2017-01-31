var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');

gulp.task('build', function () {
    return browserify({entries: './app/index.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2017', 'es2016', 'es2015', 'react']})
        .bundle()
        .pipe(source('app.js'))
        // .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('prod/js/'));
});

gulp.task('buildCSS', function() {
	gulp.src('./app/**/*.css')	
		.pipe(concat('app.css'))
		.pipe(gulp.dest('prod/css/'));
})

gulp.task('watch', ['build'], function () {
    gulp.watch('./app/**/*.jsx', ['build']);
});

gulp.task('watchCSS', ['buildCSS'], function () {
	gulp.watch('./app/**/*.css', ['buildCSS']);
})

gulp.task('default', ['watch', 'watchCSS']);