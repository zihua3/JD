/**
 * Gulp前端管理任务
 *
 * @author lijj
 * @create 2019-07-17
 */
const gulp = require('gulp');
const $ = require("gulp-load-plugins")();
const combiner = require('stream-combiner2');

/* === 基本路径及输出目录 === */
const _baseUrl = "static/scripts3rd";
const _dist = "static/scripts3rd";
// 合并第三方JS
gulp.task("concat-vendor", function () {
  let combined;

  let vendorPath = [
    _baseUrl + "/dayjs/dayjs.min.js",
  ];

  combined = combiner.obj([
    gulp.src(vendorPath),
    $.concat('vendor.all.js'),
    gulp.dest(_dist),
    $.uglify(),
    $.rename({ extname: '.min.js' }),
    gulp.dest(_dist)
  ]);

  combined.on('error', console.error.bind(console));

  return combined;
});
