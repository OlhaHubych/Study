
const { sass } = require('gulp-sass');
const { src, dest } = require('gulp');

function runSCSS() {
    return src(["./HW_006_HTML&CSS_Ad_Hubych_Olha/css/*.scss", "./HW_006_HTML&CSS_Ad_Hubych_Olha/css/*.sass"])
    .pipe(sass())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./HW_006"))
}

function watch() {
    //Находим папку и отмечаем, за каким файлом необходимо наблюдать, если он найден - выполняем задание "scss"
     gulp.watch(["./HW_006_HTML&CSS_Ad_Hubych_Olha/css/*.scss", "./HW_006_HTML&CSS_Ad_Hubych_Olha/css/*.sass"], scss)
}
exports.watch = watch; 
exports.runSCSS = runSCSS;
