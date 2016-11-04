var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var src = {
    scss : './scss/**/*.scss',
    js   : './js/*.js',
    html : './*.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.js).on('change', reload);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
      .pipe(sourcemaps.init())
      .pipe(autoprefixer({
        browsers: ['last 4 versions']
      }))
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./css/'))
      .pipe(reload({stream: true}));
});

// Minify css for production
gulp.task('prod', function() {
    return gulp.src(src.scss)
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['serve']);