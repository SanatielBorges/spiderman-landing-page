const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser");
const concat = require("gulp-concat");

function compileSass() {
  return src("src/styles/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist/css"));
}

function minifyCSS() {
  return src("dist/css/main.css")
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/css"));
}

function minifyHTML() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

function minifyJS() {
  return src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/js"));
}

const build = series(compileSass, minifyCSS, minifyHTML, minifyJS);

function watchFiles() {
  watch("src/styles/**/*.scss", compileSass);
  watch("src/js/*.js", minifyJS);
  watch("src/*.html", minifyHTML);
}

exports.default = series(build, watchFiles);
exports.build = build;
