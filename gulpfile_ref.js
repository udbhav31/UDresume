var gulp = require('gulp');
var debug = require('gulp-debug');
var ts = require('gulp-typescript');
var merge = require('merge2');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    templateCache = require('gulp-angular-templatecache');
    //console.log(sass);

 let memory ={};
//Task for deploying Skanova.js
gulp.task('DeploySkanova', function () {
    return gulp.src(['src/Skanova.ts', 'src/ToolTip.ts', 'src/Hantera/PricerDetailer.ts' ,'src/Hantera/Slider.ts',
                     'src/Hantera/FollowMyOrder.ts','src/Hantera/Reklemation.ts','src/Hantera/NotificationSlider.ts'])
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'Skanova.js'
        }))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('dist'));
});

// Tasks for deploying NotificationViewApp.js
gulp.task('BuildNotificationViewApp', ['buildjstemplates'], function () {
    return gulp.src([
            'src/NotificationViewApp/app/notificationApp.js',
            'src/NotificationViewApp/app/notificationComponent/notification.component.js',
            'src/NotificationViewApp/app/notificationComponent/search.component.js',
            'src/NotificationViewApp/app/notificationComponent/notification.list.component.js',
            'src/NotificationViewApp/app/templates.js'
        ])
        .pipe(concat('NotificationViewApp.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task("scssCompile", function () {
    return gulp.src(['src/NotificationViewApp/css/src/*.scss'])
        //.pipe(debug())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/NotificationViewApp/css/dist/"));
});
gulp.task("injectCSS",["scssCompile"], function () {
    return gulp.src(['src/NotificationViewApp/templates/src/**/*.html'])
        .pipe(replace(/<@includeCSS="([^\*]+\.css)"[^>]*>/g, function (s, filename) {
            console.log(filename);
            var style = fs.readFileSync(filename, 'utf8');
            return '<style>\n' + style + '\n</style>';
        }))
        .pipe(gulp.dest("src/NotificationViewApp/templates/dist"));
});

gulp.task('buildjstemplates',["injectCSS"], function () {
    return gulp.src(['src/NotificationViewApp/templates/dist/**/*.html'])
        .pipe(templateCache({
            module: 'notificationApp'
        }))
        .pipe(gulp.dest('src/NotificationViewApp/app/'));
});
// End Notification View App tasks

//Begin overblik app taskslet memory = {};


let Overblik = () => {
    memory.overblik = {};

    gulp.task("scssCompile", () => {
        let cssSRC, compiledCSS;
        cssSRC = gulp.src(['src/Overblik/css/**/*.scss']);
        compiledCSS = cssSRC.pipe(sass().on('error', sass.logError));
        return compiledCSS.pipe(gulp.dest("temp/overblik/css"));
    });

    
    gulp.task("injectCSS", ["scssCompile"], () => {
        return gulp.src(['src/Overblik/templates/**/*.html'])
            .pipe(replace(/<@includeCSS="([^\*]+\.css)"[^>]*>/g, function (s, filename) {
                console.log(filename);
                var style = fs.readFileSync(filename, 'utf8');
                return '<style>\n' + style + '\n</style>';
            }))
            .pipe(gulp.dest("temp/overblik/templates"));
    });


    gulp.task('buildjstemplates', ["injectCSS"], () => {
        return gulp.src(['temp/overblik/templates/**/*.html'])
            .pipe(templateCache({
                module: 'overblik'
            }))
            .pipe(gulp.dest('temp/overblik/templates/js'));
    });


    gulp.task("transpileTS", ['buildjstemplates'], () => {
        let src, transpiledJS;
        src = gulp.src(['src/Overblik/app/overblikApp/overblik.app.ts',
                        'src/Overblik/app/**/*.ts'
                        ]);
        transpiledJS = src.pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }));
        return transpiledJS.pipe(gulp.dest("temp/overblick/js/"));
    });


    gulp.task("concatJS", ["transpileTS"], () => {
        let src;
        src = gulp.src(["temp/overblick/js/**/*.js", "temp/overblik/templates/js/**/*.js"]);
        return src.pipe(concat("overblik.js")).pipe(gulp.dest("dist/"));
    });


    gulp.task("bundleOverblik", ["concatJS"], () => {
        return ;
    });

    //bundle Overblik
    return "bundleOverblik";
};

//common utility functions 
rmDir = function (dirPath) {
    try { var files = fs.readdirSync(dirPath); }
    catch (e) { return; }
    if (files.length > 0)
        for (var i = 0; i < files.length; i++) {
            var filePath = dirPath + '/' + files[i];
            if (fs.statSync(filePath).isFile())
                fs.unlinkSync(filePath);
            else
                rmDir(filePath);
        }
    fs.rmdirSync(dirPath);
};


// Default task - Run all individual tasks
gulp.task('default', ['DeploySkanova'], function () {
    rmDir("temp");
});