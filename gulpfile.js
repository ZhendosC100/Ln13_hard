const gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    tinypng = require('gulp-tinypng-compress'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    pump = require('pump');


gulp.task('minify-css', function(done){
    return gulp.src('css/*.css') // from folder
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/')); //to folder

    done();
});

gulp.task('js-minify', function (cb) {
    pump([
          gulp.src(['js/*.js', '!js/*.min.js']),
          jsmin(),
          rename({suffix: '.min'}),
          gulp.dest('dist/js/')
      ],
      cb
    );
  });

gulp.task('move-js', function(done){
    return gulp.src('js/*.min.js') // from folder
    
    .pipe(gulp.dest('dist/js/')); //to folder

    done();
});

gulp.task('move-php', function(done){
    return gulp.src('*.php') // from folder
    
    .pipe(gulp.dest('dist')); //to folder

    done();
});

gulp.task('minify', () => {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });

gulp.task('fonts', function(done){
    return gulp.src('fonts/**/*') // from folder
    
    .pipe(gulp.dest('dist/fonts/')); //to folder

    done();
});

gulp.task('tinypng', function (done) {
    return gulp.src('./img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'vfVx0MDPzxL5uydUvkxm2WCyY5wIzBT6'
        }))
        .pipe(gulp.dest('dist/img/'));
        done();
});

gulp.task('default', gulp.series('minify-css', 'js-minify','move-js' , 'minify', 'fonts','tinypng', function (done){
    done();
}));

