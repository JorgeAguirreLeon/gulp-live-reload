var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('server', ()=> {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true,
      clientLog: 'error',
      log: 'error'
    }));
});
