// 引入
const gulp = require('gulp');
const webserver = require('gulp-webserver');
const scss = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');

const opt = {
    mincss: true,
    minjs: true
}

// 创建服务
gulp.task('webserver', () => {
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            open: true,
            livereload: true,
            fallback: 'index.html',
            misoft: function(req, res) {
                if(req.url === '/userinfo'){
                    res.writeHead(200, {
                        'Content-type': 'text/json;chareset=utf-8'
                    })
                    res.end(JSON.stringify(data));
                }
            }
        }));
});
// 压缩
gulp.task('min', () => {
    gulp.src('./index.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./App'));
});
gulp.task('default', () => {
    gulp.start('webserver' ,'min');
})