'use strict';

var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    plumber     = require('gulp-plumber'),
    notify      = require("gulp-notify"),
    ngAnnotate  = require('gulp-ng-annotate'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();


//-------------------
// Scripts
//-------------------
gulp.task('js',function(){
    gulp.src([
            'builds/dev/app/**/*.js',
            '!builds/dev/app/**/*_test.js'
        ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('builds/dev'));
})

gulp.task('jslibs', function(){
    gulp.src([
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            // 'node_modules/angular-material/angular-material.js'
        ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('builds/dev'));
});

gulp.task('prod:js',function(){
    gulp.src([
            'builds/dev/app/**/*.js',
            '!builds/dev/app/**/*_test.js'
        ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(concat('app.js'))
        .pipe(plumber())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('builds/prod'));
    gulp.src([
            'bower_components/angular/angular.min.js',
            'bower_components/firebase/firebase.js',
            'bower_components/angularfire/dist/angularfire.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('builds/prod'));
})


//-------------------
// Styles
//-------------------
gulp.task('sass', function(){
    gulp.src('builds/dev/app/styles/**/*.scss')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('builds/dev'))
        .pipe(browserSync.stream());
})

gulp.task('csslibs', function(){
    gulp.src([
            'node_modules/angular/angular-csp.css',
        ])
        .pipe(concat('theme.css'))
        .pipe(gulp.dest('builds/dev'));
})

gulp.task('prod:sass', function(){
    gulp.src('builds/dev/app/styles/**/*.scss')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('builds/prod'));
})

//-------------------
// HTML
//-------------------
gulp.task('prod:html', function(){
    gulp.src('builds/dev/**/*.html')
        .pipe(gulp.dest('builds/prod'));
})

gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: ['builds/dev']
        }

    });

    browserSync.watch(['builds/dev/**/*.html']).on('change', browserSync.reload)
    browserSync.watch(['builds/dev/*.js']).on('change', browserSync.reload)

    gulp.watch('builds/dev/app/styles/**/*.scss', ['sass'])
    gulp.watch('builds/dev/app/**/*.js', ['js'])
});


gulp.task('default', [
    'jslibs',
    'js',
    'csslibs',
    'sass',
    'serve'
]);

gulp.task('prod', [
    'prod:js',
    'prod:sass',
    'prod:html',
]);