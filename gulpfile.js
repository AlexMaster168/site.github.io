const gulp = require('gulp');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

//Порядок подключения css файлов
const cssFiles = [
    './Css/Style.css',
    './Css/Image-style.css',
    './Css/Animation-style.css'
]
//Порядок подключения js файлов
const jsFiles = [
    './Js/Js.js',
    './Js/image.js',
    './Js/animation.js'
]
const htmlFiles = [
    'index.html',
    'image.html',
    'animation.html',
    'video.html',
    'music.html'
]
//Таск на стили CSS
function styles() {
    //Шаблон для поиска файлов CSS
    //Всей файлы по шаблону './src/css/**/*.css'
    return gulp.src(cssFiles)
        //Добавить префиксы
        .pipe(autoprefixer({
            cascade: false
        }))
        //Минификация CSS
        .pipe(cleanCSS({compatibility: 'ie8'})
        )
        //Выходная папка для стилей
        .pipe(gulp.dest('./Css'))
        .pipe(browserSync.stream());
}
//Таск на скрипты JS
function scripts() {
    //Шаблон для поиска файлов JS
    //Всей файлы по шаблону './src/js/**/*.js'
    return gulp.src(jsFiles)
        //Минификация JS
        .pipe(uglify())

        //Выходная папка для скриптов
        .pipe(gulp.dest('./Js'))
        .pipe(browserSync.stream());
}
function html() {
    return gulp.src(htmlFiles)
        //Выходная папка для скриптов
        .pipe(gulp.dest('.'))
}
//Удалить всё в указанной папке
function clean(){
    return del(["build/*"])
}
//Просматривать файлы
function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //Следить за CSS файлами
    gulp.watch('./css/css/**/*.css', styles)
    //Следить за JS файлами
    gulp.watch('./js/js/**/*.js', scripts)
    //При изменении HTML запустить синхронизацию
    gulp.watch("./*.html").on('change', browserSync.reload);
}
//Таск вызывающий функцию styles
gulp.task('styles1',styles);
//Таск вызывающий функцию scripts
gulp.task('scripts1',scripts);
//Таск Вызывающий функцию html
gulp.task('html',html);
//Таск для очистки папки build
gulp.task('del',clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts,html)));
//Таск запускает таск build и watch последовательно
gulp.task('default', gulp.series('build','watch'));


