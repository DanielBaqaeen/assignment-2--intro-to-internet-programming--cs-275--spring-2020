const { src, dest, watch, series } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const cssLinter = require(`gulp-stylelint`);
const jsLinter = require(`gulp-eslint`);
const babel = require(`gulp-babel`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
const htmlCompressor = require(`gulp-htmlmin`);
const jsCompressor = require(`gulp-uglify`);

let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator());
};

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }))
        .pipe(dest(`temp/css`));
};

let lintJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

//linter and transpiler for js can be combined together later

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/js`));
};



let serve = () => {

    browserSync({
        notify: true,
        reloadDelay: 1500,
        server: {
            baseDir: [
                `html`,
                `temp`
            ]
        }
    });

    watch([`html/*.html`, `css/*.css`, `js/*.js`],
        series(validateHTML, lintCSS, lintJS, transpileJSForDev)
    ).on(`change`, reload);
};

let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressJS = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js/`));
};

let copyCSS = () => { //maybe be changed to a compressor
    return src(`css/*.css`)
        .pipe(dest(`prod/css/`));
};



exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.serve = serve;
exports.dev = series(validateHTML, lintCSS, lintJS, transpileJSForDev, serve);
exports.compressHTML = compressHTML;
exports.compressJS = compressJS;
exports.copyCSS = copyCSS;
exports.build = series(compressHTML, compressJS, copyCSS );
