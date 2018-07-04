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
        'assets/js/carousel.js',
        'assets/js/tabs.js'
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
    gulp.watch( ['assets/scss/*.scss', 'assets/scss/*/*.scss'], ['sass'] );
    // js
    gulp.watch( 'assets/js/*.js', ['scripts'] );
});

// Modules JS - copy any required front end modules out of node_modules into assets
gulp.task( 'js-modules', function(){
    return gulp.src([
        'node_modules/featherlight/release/featherlight.gallery.min.js',
        'node_modules/featherlight/release/featherlight.min.js'
    ])
        // Perform minification tasks, etc here
        .pipe(gulp.dest('assets/dist/js'));
});

// Modules CSS - copy any required front end modules out of node_modules into assets
gulp.task( 'css-modules', function(){

    return gulp.src([
        'node_modules/featherlight/release/featherlight.min.css',
        'node_modules/featherlight/release/featherlight.gallery.min.css'
    ])
    .pipe(gulp.dest('assets/dist/css'));
});

// Default Task
gulp.task( 'default', ['scripts', 'sass'] );
