var gulp    = require('gulp');
var bem     = require('gulp-bem');
var concat  = require('gulp-concat');
var bh = require('gulp-bh');
var del = require('del');
var browserSync = require('browser-sync').create();
var testFolder = 'blocks/';
var fs = require('fs');
var levels = [
    'blocks',
    'pages'
];

var deps;

//console.log('/*    */');

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist'
  });
  browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});


gulp.task('css', function () {
    var tree = bem(levels)
        //.pipe(tree.deps());

    // console.log(tree);
    // console.log('/*    */');
    // console.log(tree.deps('blocks/'));

    return tree.deps('blocks/page/')
        .pipe(bem.src('{bem}.css'))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));  


    // fs.readdir(testFolder, function (err, files) {
    //     files.forEach(function (folder) {

    //         console.log(__dirname + '/blocks/' + folder);

    //         (function (i) {
                
                
    //         })(folder);
    //     });
    // });

    // return tree.deps('blocks/*/')
    //     .pipe(bem.src('{bem}.css'))
    //     .pipe(concat('index.css'))
    //     .pipe(gulp.dest('./dist'));    

    //console.log(tree.deps('blocks/menu'));

});

gulp.task('html', function () {

    delete require.cache[require.resolve('./pages/index/page/page.bemjson.js')];

    var tree = bem(levels)

    return tree.deps('pages/index/page')
        .pipe(bem.src('{bem}.bh.js'))
        .pipe(bh(require('./pages/index/page/page.bemjson.js'), 'bem.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return del('public');
});

gulp.task('cnt', function () {
    return gulp.src([
        './dist/head.html',
        './dist/bem.html'
    ])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist'));
})

gulp.task('build', ['clean','html', 'css', 'cnt']);

gulp.task('watch', ['serve', 'html', 'css', 'cnt'], function() { 
    gulp.watch(['pages/index/**/*.*.js','pages/index/**/*.js',],  ['html']);   // Наблюдение за JS файлами в папке js
    gulp.watch(['pages/index/**/*.css', 'blocks/**/*.css'], ['css']);
    gulp.watch(['./dist/*.html'], ['cnt']);
});

gulp.task('default',['build', 'watch']);