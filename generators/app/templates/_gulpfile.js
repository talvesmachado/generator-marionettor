/*global -$ */
'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var fs = require('fs');
var shell = require('gulp-shell');
var $ = require('gulp-load-plugins')();

/*******************  VARS  ************************/

var reload = browserSync.reload;
var devEnv = 'app';
var buildEnv = 'dist';

/*******************  DEV  ************************/

// Traitement des fichiers SCSS
// Publication sur le DEV et sur le BUILD
gulp.task('styles', function() {
    return gulp.src(devEnv + '/styles/main.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe($.postcss([
            require('autoprefixer-core')({
                browsers: ['last 1 version']
            })
        ]))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(devEnv + '/styles'))
        .pipe(reload({
            stream: true
        }));
});
// Copie des fichiers de font Bootstrap
// Publication sur le DEV et sur le BUILD
gulp.task('fonts', function() {
    return gulp.src(require('main-bower-files')({
            filter: '**/*.{eot,svg,ttf,woff,woff2}'
        }).concat(devEnv + '/fonts/**/*'))
        .pipe(gulp.dest(devEnv + '/fonts'))
        .pipe(gulp.dest(buildEnv + '/fonts'));
});
/*******************  BUILD  ************************/

// SUPPRESSION DU REPERTOIRE DE PUBLICATION
gulp.task('clean', function() {
    return gulp.src(buildEnv + '/*')
        .pipe(vinylPaths(del));
});
// CONTROLE DES FICHIERS JS
gulp.task('jshint', function() {
    return gulp.src(devEnv + '/scripts/**/*.js')
        .pipe(reload({
            stream: true,
            once: true
        }))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});
// REQUIRE.JS
// install npm requirejs to use r.js
// create & configure a build.js 
// all the build info of the JS is in this file
gulp.task('scripts', shell.task([
    'r.js -o app/scripts/build.js'
]));
// EXPORT DES FICHIERS DU PROJET
gulp.task('exportFiles', function() {
    gulp.src(devEnv + '/*.+(html|txt|ico|htaccess)')
        .pipe(gulp.dest(buildEnv));
    gulp.src(devEnv + '/styles/*.css')
        .pipe($.minifyCss())
        .pipe(gulp.dest(buildEnv + "/styles"));
    gulp.src('bower_components/modernizr/modernizr.js')
        .pipe(gulp.dest(buildEnv + "/bower_components/modernizr"));
    gulp.src('bower_components/requirejs/require.js')
        .pipe(gulp.dest(buildEnv + "/bower_components/requirejs"));
});
// EXPORT ET MINIFICATION DES IMAGES
gulp.task('images', function() {
    return gulp.src(devEnv + '/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{
                cleanupIDs: false
            }]
        })))
        .pipe(gulp.dest(buildEnv + '/images'));
});


/*********************  TACHES  ***********************/

gulp.task('test', ['jshint'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['test'],
            routes: {
                '/bower_components': 'bower_components',
                '/test': 'test',
                '/app': 'app'
            }
        }
    });
});

gulp.task('dev', ['styles', 'fonts', 'jshint'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: [devEnv],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
    gulp.watch([
        devEnv + '/*.html',
        devEnv + '/scripts/**/*.js',
        devEnv + '/templates/**/*.hbs',
        devEnv + '/images/**/*'
    ]).on('change', reload);
    gulp.watch(devEnv + '/styles/**/*.scss', ['styles']);
    gulp.watch(devEnv + '/fonts/**/*', ['fonts']);
});

gulp.task('build', ['jshint', 'images', 'scripts', 'exportFiles'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: [buildEnv]
        }
    });
    return gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});