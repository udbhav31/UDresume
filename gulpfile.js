var gulp = require('gulp');
var debug = require('gulp-debug');
//var ts = require('gulp-typescript');
var merge = require('merge2');
//var uglify = require('gulp-uglify');
var concat = require('gulp-concat'),
    /*sass = require('gulp-sass'),
    replace = require('gulp-replace'),
    fs = require('fs'),*/
    templateCache = require('gulp-angular-templatecache');

gulp.task('buildjstemplates', () => {
    return gulp.src(['src/templates/**/*.html'])
        .pipe(templateCache({
            module: 'UDresume'
        }))
        .pipe(gulp.dest('src/templates/js'));
});

gulp.task('mergeJS', ['buildjstemplates'], function () {
    return gulp.src(['src/app/*.js'])
        .pipe(concat('temp.js'))
        .pipe(gulp.dest('src/app/js'));
});
gulp.task("concatJS", ["mergeJS"], () => {
    let src;
    src = gulp.src(["src/app/main/**/*.js", "src/app/data/**/*js","src/app/js/**/*.js", "src/templates/js/**/*.js"]);
    return src.pipe(concat("resume.js")).pipe(gulp.dest("dist/"));
});

gulp.task("bundelresume", ["concatJS"], ()=>{
    return ;
})

// Default task - Run all individual tasks
gulp.task('default', ['bundelresume'], function () {
    //rmDir("temp");
    return;
});