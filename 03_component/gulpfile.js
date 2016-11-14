var gulp=request('gulp');
var connect=request('gulp-connect');
gulp.task('server',{
    connect.server({
        root:'app',
        port:4444
    })
})
