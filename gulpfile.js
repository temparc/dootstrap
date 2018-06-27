// Include gulp
var gulp = require( 'gulp' );

// Include plugins
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );
var watch = require( 'gulp-watch' );

// JS compilation
gulp.task( 'scripts', function() {

    return gulp.src( [
        // independent JS compilation so all js is not loaded on every page
        'assets/js/main.js',
        'assets/js/carousel.js'
    ] )
      .pipe( rename( { suffix: '.min' } ) )
        .pipe( uglify() )
      .pipe( gulp.dest( 'assets/dist/js' ) );
});

// SCSS compilation
var sass = require( 'gulp-ruby-sass' );
gulp.task( 'sass', function() {
    return sass( 'assets/scss/main.scss', { style: 'compressed' } )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( gulp.dest( 'assets/dist/css' ) );
});

// Watch
gulp.task( 'watch', function(){

    // css
    gulp.watch( 'assets/scss/*.scss', ['sass'] );
    // js
    gulp.watch( 'assets/js/*.js', ['scripts'] );
});

// Default Task
gulp.task( 'default', ['scripts', 'sass'] );