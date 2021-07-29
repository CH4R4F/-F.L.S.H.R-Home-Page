// I used gulp to manage things while creating this website and this is the gulpfile.js file
// to use all this functions in your local machin you have to install all the packages I used here
// you can find all what you need in the README.md file

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");

// sass task
function styles() {
    return src("./scss/*.scss", { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest("styles", { sourcemaps: "./" }));
}

// for javascript (i dont need it right now)

// function scripts() {
//     return src("./Js/index.js", {sourcemaps: true})
//     .pipe(terser())
//     .pipe(dest("scipts", {sourcemaps: "./"}));
// }

// browsersync setup
function browsersyncServe(callback) {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });
    callback();
}

function browsersyncReload(callback) {
    browserSync.reload();
    callback();
}

// gulp watch
function watchTasks() {
    watch("*.html", browsersyncReload);
    watch("./scss/*.scss", series(styles, browsersyncReload));
}

// default gulp
exports.default = series(
    styles,
    // scripts,
    browsersyncServe,
    watchTasks
);
