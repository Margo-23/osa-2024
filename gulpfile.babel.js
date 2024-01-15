import gulp from 'gulp';
import gulpif from 'gulp-if';
import browser from 'browser-sync';
import rimraf from 'rimraf';
import webpackStream from 'webpack-stream';
import webpack2 from 'webpack';
import autoprefixer from 'autoprefixer';
import named from 'vinyl-named';
import imagemin from 'gulp-imagemin';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminSvgo from 'imagemin-svgo';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'cssnano';
import terser from 'gulp-terser';
import panini from 'panini';
// eslint-disable-next-line camelcase
import ext_replace from 'gulp-ext-replace';
import svgSprites from 'gulp-svg-sprites';
import dotenv from 'dotenv';

dotenv.config();
const { PROXY, PORT, HOST } = process.env;

// Config
import { path } from './config.js';

// Check for --production flag
// const PRODUCTION = !!(yargs.argv.production);
const PRODUCTION = process.argv.includes('--production');

gulp.task(
  'build',
  gulp.series(
    clean,
    gulp.parallel(pages, javascript, vendorJs, images, svg),
    sassBuild
  )
);

// Build the site, run the server, and watch for file changes
gulp.task('default', gulp.series('build', server, watch));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf(path.dist, done);
}

// Copy page templates into finished HTML files
function pages() {
  return gulp
    .src(path.pages.src)
    .pipe(panini(path.pages.options))
    .pipe(ext_replace('.html'))
    .pipe(gulp.dest(path.dist));
}

// Load updated HTML templates and partials into Panini
function resetPages(done) {
  panini.refresh();
  done();
}

// Compile Sass into CSS
// In production, the CSS is compressed
const sass = gulpSass(dartSass);

function sassBuild() {
  const postCssPlugins = [autoprefixer(), PRODUCTION ? cssnano() : null].filter(
    Boolean
  );

  return gulp
    .src(path.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(path.scss.dist))
    .pipe(browser.reload({ stream: true }));
}

// Combine JavaScript into one file
// In production, the file is minified
const webpackConfig = {
  mode: PRODUCTION ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            compact: false,
          },
        },
      },
    ],
  },
  devtool: !PRODUCTION && 'source-map',
};

function javascript() {
  return gulp
    .src(path.js.src)
    .pipe(named())
    .pipe(sourcemaps.init())
    .pipe(webpackStream(webpackConfig, webpack2))
    .pipe(
      gulpif(
        PRODUCTION,
        terser().on('error', (e) => {
          console.log(e);
        })
      )
    )
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(path.js.dist));
}

// External js libraries that don't include in app.js
function vendorJs() {
  return gulp.src(path.js.vendor).pipe(gulp.dest(path.js.dist));
}

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp
    .src(path.img.src)
    .pipe(
      gulpif(
        PRODUCTION,
        imagemin([
          imageminGifsicle({ interlaced: true }),
          imageminMozjpeg({ quality: 90, progressive: true }),
          imageminOptipng({ optimizationLevel: 3 }),
          imageminSvgo(),
        ])
      )
    )
    .pipe(gulp.dest(path.img.dist));
}

// SVG sprite
function svg() {
  return gulp
    .src(path.svg.src)
    .pipe(
      svgSprites({
        mode: 'symbols',
        svg: {
          symbols: 'sprite.svg',
        },
      })
    )
    .pipe(gulp.dest(path.svg.dist));
}

// Start a server with BrowserSync to preview the site
function server(done) {
  browser.init(
    {
      ...(Boolean(PROXY) ? { proxy: PROXY } : { server: path.dist }),
      host: HOST || 'localhost',
      port: PORT || 8080,
    },
    done
  );
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}

// Watch for changes
function watch() {
  gulp
    .watch(path.pages.watch)
    .on('all', gulp.series(resetPages, pages, reload));
  gulp.watch(path.scss.watch).on('all', sassBuild);
  gulp.watch(path.js.watch).on('all', gulp.series(javascript, reload));
  gulp.watch(path.js.vendor).on('all', gulp.series(vendorJs, reload));
  gulp.watch(path.img.src).on('all', gulp.series(images, reload));
  gulp.watch(path.svg.src).on('all', gulp.series(svg, reload));
}
