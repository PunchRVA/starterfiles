// started with: http://markgoodyear.com/2014/01/getting-started-with-gulp/

// get all the plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    scsslint = require('gulp-scss-lint');

// do CSS stuff
gulp.task('styles', function() {
  return gulp.src(['scss/**/*.scss', '!scss/_normalize.scss'])
    // .pipe(scsslint())
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    // .pipe(notify({ message: 'Styles task complete' }))
    // .on('error', gutil.log)
    .pipe(livereload())
    ;
});

// do JS stuff
// source scripts go in 'scripts' folder and are compiled into 'js'
// we're ignoring modernizr because we need that to be a separate file so we can load it in the head
// gulp.task('scripts', function() {
//   return gulp.src('scripts/**/*.js', '!scripts/modernizr.js')
//     .pipe(jshint('.jshintrc'))
//     .pipe(jshint.reporter('default'))
//     // .pipe(concat('app.js'))
//     .pipe(gulp.dest('js'))
//     // .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
//     .pipe(notify({ message: 'Scripts task complete' }));
// });

// copy modernizr to the js directory
// this keeps the workflow consistent
// gulp.task('scripts_copy', function(){
//   return gulp.src('scripts/modernizr.js')
//     .pipe(gulp.dest('js'));
// });

// clean up
// gulp.task('clean', function(cb) {
//     del(['css', 'js'], cb)
// });

// default task
gulp.task('default', function() {
    gulp.start('watch');
});

// watch task
gulp.task('watch', function() {
  // livereload({ start: true })

  // Create LiveReload server
  livereload.listen();

  // Watch .scss files
  gulp.watch('scss/**/*.scss', ['styles']);


  // Watch .js files
  // gulp.watch('scripts/**/*.js', ['scripts', 'scripts_copy']);


  // Watch any files in dist/, reload on change
  gulp.watch(['css/**','js/**', '*.php', 'img/*.svg', '**/*.html', 'css/*.css']).on('change', livereload.changed);

});